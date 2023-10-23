FROM golang:1.19

ENV APP_HOME /go/src/middlewareSVC

WORKDIR "$APP_HOME"
COPY ./fleet-server .

# RUN go mod download
# RUN go mod verify
# RUN go build -o fleet

EXPOSE 3001
CMD ["./fleet-server"]