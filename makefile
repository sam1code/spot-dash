# setup
setup-ui:
	 cd fleet-ui && npm install 
setup-server:
	cd fleet-server && go mod download && air init
setup:
	make setup-ui && make setup-server

# dev server
server-dev:
	cd fleet-server && air
ui-dev:
	cd fleet-ui && npm run dev

# dev build
build-server:
	cd fleet-server && go build -o main.go && ./main
build-ui:
	cd fleet-ui && npm install && npm run build && npm start

# run
run-server:
	cd fleet-server && ./main
run-ui:
	cd fleet-ui && npm start