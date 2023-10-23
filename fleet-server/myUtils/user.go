package myUtils

import (
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

type User struct {
	UserName string `json:"username"`
	Password string `json:"password"`
}

// list of users
func GetUsers() []User {

	userString := os.Getenv("USERS")

	// split usersstring into array of strings by |

	userStringArray := strings.Split(userString, ",")

	// create array of users
	users := []User{}

	if len(userStringArray) == 0 {
		return users
	}

	// loop through userStringArray and split each string by : to get username and password and add to users array
	for _, user := range userStringArray {
		userArray := strings.Split(user, ":")

		if len(userArray) == 2 {
			users = append(users, User{UserName: userArray[0], Password: userArray[1]})
		}
	}

	return users
}

// check if user exists and password is correct then return true
func UserExists(username string, password string) bool {
	for _, user := range GetUsers() {
		if user.UserName == username && user.Password == password {
			return true
		}
	}
	return false
}

func userNameExists(username string) bool {
	for _, user := range GetUsers() {
		if user.UserName == username {
			return true
		}
	}
	return false
}

// create access token
func GenerateJWT(username string, c *fiber.Ctx) (**fiber.Ctx, error) {
	actoken := jwt.New(jwt.SigningMethodHS256)
	claims := actoken.Claims.(jwt.MapClaims)
	claims["username"] = username
	claims["access"] = true
	claims["exp"] = time.Now().Add(time.Minute * 1).Unix()

	token, err := actoken.SignedString([]byte(os.Getenv("ACCESS_TOKEN_SECRET")))
	if err != nil {
		return nil, err
	}

	// refresh token
	rftoken := jwt.New(jwt.SigningMethodHS256)
	claims = rftoken.Claims.(jwt.MapClaims)
	claims["username"] = username
	claims["access"] = false
	claims["exp"] = time.Now().Add(time.Minute * 15).Unix()

	reftoken, err := rftoken.SignedString([]byte(os.Getenv("REFRESH_TOKEN_SECRET")))

	if err != nil {
		return nil, err
	}

	// set headers like x-access-token and x-refresh-token
	c.Response().Header.Add("Access-Control-Expose-Headers", "x-access-token, x-refresh-token")
	c.Response().Header.Set("x-access-token", token)
	c.Response().Header.Set("x-refresh-token", reftoken)

	return &c, nil
}

func DecodeJWT(c *fiber.Ctx) error {

	// check Header for access token and refresh token
	accessToken := c.Get("x-access-token")
	refreshToken := c.Get("x-refresh-token")

	claims := jwt.MapClaims{}

	// check if access token is valid
	jwt.ParseWithClaims(accessToken, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("ACCESS_TOKEN_SECRET")), nil
	})

	if claims["access"] == true && claims["username"] != nil {

		// validate access token by jwt expiration time
		if claims.VerifyExpiresAt(time.Now().Unix(), true) == false {
			c.Response().Header.Del("x-access-token")
			c.Response().Header.Del("x-refresh-token")

			return c.Status(401).JSON(&fiber.Map{
				"data":    &fiber.Map{"message": "Access token expired!"},
				"isError": true,
			})
		}

		userExists := userNameExists(claims["username"].(string))

		if !userExists {
			c.Response().Header.Del("x-access-token")

			c.Response().Header.Del("x-refresh-token")

			return c.Status(401).JSON(&fiber.Map{
				"data":    &fiber.Map{"message": "User does not exist or has been deleted!"},
				"isError": true,
			})
		}

		return c.Next()
	} else {
		// decode the refresh token
		jwt.ParseWithClaims(refreshToken, claims, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("REFRESH_TOKEN_SECRET")), nil
		})

		// validate refresh token by jwt expiration time
		if claims.VerifyExpiresAt(time.Now().Unix(), true) == false {
			c.Response().Header.Del("x-access-token")
			c.Response().Header.Del("x-refresh-token")

			return c.Status(401).JSON(&fiber.Map{
				"data":    &fiber.Map{"message": "Refresh token expired!"},
				"isError": true,
			})
		}

		// check if refresh token is valid
		if claims["username"] != nil && claims["access"] == false {

			userExists := userNameExists(claims["username"].(string))

			if !userExists {
				c.Response().Header.Del("x-access-token")

				c.Response().Header.Del("x-refresh-token")

				return c.Status(401).JSON(&fiber.Map{
					"data":    &fiber.Map{"message": "User does not exist or has been deleted!"},
					"isError": true,
				})
			} else {
				// generate new access token
				_, err := GenerateJWT(claims["username"].(string), c)
				if err != nil {
					return c.Status(500).JSON(&fiber.Map{
						"data":    &fiber.Map{"message": "Error generating access token!"},
						"isError": true,
					})
				}

				return c.Next()
			}
		}

	}

	error := fmt.Errorf("Unauthorized")
	return ErrorRespoonse(c, error)
}
