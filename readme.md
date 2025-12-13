# Scores

## api
http://localhost:8111/swagger-ui/index.html

## frontend
http://localhost:8111

## build 

### build image
```shell
podman build --platform linux/arm64,linux/amd64 --no-cache -t angular-scoreboard .
```

start container
```shell
podman run -d -p 3000:3000 --name angular-scoreboard artisjaap/angular-scoreboard
```

### push image

```shell
podman login
```
```shell
podman image tag angular-scoreboard artisjaap/angular-scoreboard
podman image push artisjaap/angular-scoreboard
````
```shell
podman logout
```
