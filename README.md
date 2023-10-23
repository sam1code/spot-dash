# Fleet management Dashboard

## Installation and setup

### For local (without docker)

1. Node.js and npm should be installed on your machine.
2. Golang should be installed on your machine.
3. Clone the repository.
4. Make should be installed on your machine.(optional)
5. Install the dependencies.
      i. with make(if make is installed)
   ```bash
   make setup
   ```
      ii. without make
   ```bash
   cd fleet-ui
   npm install
   cd ..
   cd fleet-server
   go mod download
   ```
6. Run the server.
   i. with make(if make is installed)
   a. For frontend
   ```bash
   make ui-dev
   ```
   b. For backend
   ```bash 
   make server-dev
   ```
   make sure that you have set the environment variables for the backend server. You can find the list of environment variables in the .env.example file. You can copy the .env.example file and rename it to .env and set the environment variables.
   Also make sure that your port 3000 and 3001 are free.

   ii. without make
   a. For frontend
   ```bash 
   cd fleet-ui && npm run dev
   ```
   b. For backend
   ```bash
   cd fleet-server go run .
   ```

### For docker(local)

    Not available yet

### For production(without docker)

    Not available yet

### For production(with docker)

    ```bash
    docker-compose up --build
    ```
    make sure both the ports 3000 and 3001 are free or you canconfigure the ports in docker-compose.yml file. Also be careful of .env file.

Note: For documentation, please refer to Documentation.md file or [Documentation](/Documentation.md).