# Docker Notes

- [Dockerfile ref](https://docs.docker.com/reference/dockerfile/)

```dockerfile
FROM <base-image>             # e.g., node:18-alpine

WORKDIR <working-directory>   # e.g., /app

COPY <src-path> <dest-path>   # src = relative to build context
                              # dest = relative to WORKDIR

RUN <command>                 # e.g., RUN npm ci

ENTRYPOINT ["command"]        # Optional; use for fixed entry logic

CMD ["arg1", "arg2"]          # Final arguments passed to ENTRYPOINT or run command

```

- States - created, running, stopped, exited
- YAML == `.yml` == `.yaml`

## Tried cmds (CLI)

- `docker --version`
- `docker info`
- `docker search IMAGENAME` - Search Docker Hub for images
- `docker ps` = `docker container ls` - only running
- `docker ps -a` - all (running, stopped, ...)
- `docker ps -aq` - only all contianer IDs (running, stopped, exited, created)
- `docker rm [CONTAINERID | CONTAINERNAME]` - delete (to stop running and delete use `-f`)
- `docker container commit -m "COMMIT MESSAGE" BASECONTAINERNAME NEWIMAGENAME`
- `docker image history IMAGENAME` - view commit messages (changes)
- `docker rm $(docker ps -aq)` - delete all containers
- `docker build -t IMAGETAGNAME BUILDCONTEXT` - dockerfile to image, build context means relative path
- `docker images` -
- `docker rmi [IMAGENAME | IMAGEID]` - remove image
- `docker run [OPTIONS] IMAGE [COMMAND] [ARGS...]`
  - image to a new running container
  - port is optional, if not mentioned then no link between VM(host) & container
  - HOSTPORT means localhost (VM/PC/host machine), CONTAINERPORT means port inside container
  - ARGS overwrite CMD in dockerfile (optional)
  - OVERWRITEARGS - if you want interactive linux env follow this order `bash`, `/bin/bash`, `sh`, `/bin/sh`

  ```bash
  docker run \
      --env-file ENVFILENAME \
      -p HOSTPORT:CONTAINERPORT \
      [-d | -it] \
      --name CONTAINERNAME \
      --entrypoint OVERWRITEARGS \
      IMAGENAME \
      ARGS
  ```

- `docker start -ai CONTAINERNAME` - restart stopped container
- `docker exec -it CONTAINERNAME ARGS` - run commands insdie a running container
- `Ctrl + p` + `Ctrl + q` - detach from a running container
- `docker create NETWORKNAME`
- `docker inspect NETWORKNAME`
- `docker logs -f CONTAINERNAME`
- `docker compose -f DOCKERCOMPOSEFILENAME.yml up` - custom file
- `docker compose up --build` - only if file name is `doker-compose.yml` (legacy) or `compose.yml` (modern)
- `docker compose -f docker-compose.yml -f docker-compose.override.yml up` - merge multiple compose files (override) (TODO)
- `docker login`
- `docker tag TAGNAME USERNAME/IMAGENAME:latest`

## Flags

- `-a`- show all containers | attach to output (`run`, `start`)
- `-q`- quiet mode (show only IDs)
- `-i` - interactive input, Keep STDIN open (for input) (`run`, `start`)
- `-t` - tag an image (`build`) | Allocate a pseudo-TTY (formatted terminal output, TTY=Teletypewriter) (`run`)
- `-it` - interactive mode (`-i` + `-t`)
- `-d` - detach mode (run in background)
- `-p` - PORT mapping
- `-f` - follow
- `--build` - rebuild images before starting containers (`compose up`)

## Examples

- shadow voice
  - backend
    - test1 - `docker run --env-file .env -p 7777:3000 -it --name test-image --entrypoint /bin/sh backend-image`
    - test2 - `docker run --env-file .env -p 3000:3000 --name shadow-voice-backend backend-image`
  - frontend
    - test - `docker run -it -p 5173:80 --entrypoint /bin/sh --name ftest1 frontend-image`
    - test2 - `docker run --env-file .env.production -p 5173:80 --name shadow-voice-frontend frontend-image`
  - complete/final

    ```bash
    docker network create shadow-voice-net
    docker run -d --env-file .env --name shadow-voice-backend --network shadow-voice-net backend-image
    docker run -d -p 5173:80 --name shadow-voice-frontend --network shadow-voice-net frontend-image
    ```
