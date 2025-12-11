# Scores

## api
http://localhost:8111/swagger-ui/index.html

## frontend
http://localhost:8111

## build 

### build image
```shell
podman build --no-cache -t angular-scoreboard .
podman run -it -p 3000:3000 --name angular-scoreboard --rm angular-scoreboard
```

### push image

```shell
podman login
podman image tag angular-scoreboard artisjaap/angular-scoreboard
podman image push artisjaap/angular-scoreboard
podman logout
```
