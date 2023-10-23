# Required env file for backend server

The .env file is required to run the server. You can rename the .env.example( present at /fleet-server/ ) file to .env and set the environment variables.

# API Documentation

There are 3 API groups in the server.

- Auth
  - Login (/auth/login)
  - Logout (/auth/logout)
- ec2client
  - list-fleets (/aws/ec2client/list-fleets)
  - fleet-instances (/aws/ec2client/fleet-instances)
  - desc-instance (/aws/ec2client/desc-instance)
  - fleet-lunch-templates (/aws/ec2client/fleet-lunch-templates)
- cw-client
  - cpu-utilization (/aws/cw-client/cpu-utilization)
  - nw-utilization/in (/aws/cw-client/get-metric-statistics)
  - nw-utilization/out (/aws/cw-client/nw-utilization/out)

All API need Region as query parameter. You can find the list of regions [here](https://docs.aws.amazon.com/general/latest/gr/rande.html#ec2_region).
Some API also need FleetId as query parameter. You can find the list of fleets [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html).
Some API also need InstanceId as query parameter. You can find the list of instances [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-identity-documents.html).

# Adding users to the userbase

The userbase is present in the .env file. You can add users to the userbase by adding values in a env variable like USERS="user:password,user1:pwd1".

# Folder Structure

```bash
.
├── fleet-server
│   ├── main
│   │   ├── routes
│   │   ├── models
│   │   ├── controllers
│   │   ├── connections
│   │   ├── services
│   │   ├── myUtils

```

# Frontend

The frontend is built using React.js and Next.js. The frontend is present in the fleet-ui folder.
The frontend is divided into 3 main components.

- Login
- Dashboard
- Fleet-instances and Fleet-lunch-templates

frontend structure

```bash
.
├── fleet-ui
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── HOC
│   │   ├── layouts
│   │   ├── pages
│   │   ├── styles
```
