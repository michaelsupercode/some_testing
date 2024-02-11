# first docker

npm init -y

in package.json:
"type": "module"

# docker Cheatsheet

```javascript

docker pull <imagename> //loads the image from the docker hub

docker run <imagename> // creates a container from an image, if the image is not available locally docker tries to load it from the hub

docker image ls // lists the existing image files

docker container ls // lists all running containers

docker container ls -a // also lists all terminated containers

docker start <containername | containerid> // start the container

docker container stop <containername > // stop the container

docker rm <containername | containerid> // remove container

```

# Create a Image

1.- Create a Dockerfile

```markdown
# we use the node image (with ubuntu:alpine) as basis image

FROM node:alpine

# create a folder for the project

RUN mkdir firstdocker

# go to the new folder

WORKDIR /firstdocker

# we copy all ours data in our image

COPY . .

# we create the necessary files

RUN npm i

# We give the PORT number

EXPOSE 9000

# We define the comands to start the container as Array

CMD ["node", "app.js"]
```

# BUILD IMAGE

docker build .

![buildimage](/img/buildImage.png)

docker image ls

![list](/img/listimg.png)

docker run --name firstdocker_01 -d -p 8080:9000 1599a7e57c93

(with the id run the image in backdround (-d) and give a new port for 9000-> here 8080)

![runid](/img/runid.png)

docker container ls

![runid](/img/clist.png)

check the container list & test the container

![runid](/img/contworks.png)

# Exercise: Create 1 img & 3 container from the same image with dif. Ports and stop it and delete one container. Start the remaining containers again

![runid](/img/create.png)
![runid](/img/port1.png)
![runid](/img/port2.png)
![runid](/img/port3.png)

All the process:

![done](/img/done.png)

### create the image

```
docker build .
docker image ls
```

### create the 3 containers

```

docker run --name firstdocker_1 -d -p 8081:9000 c98ca0ab7f53
docker run --name firstdocker_2 -d -p 8082:9000 c98ca0ab7f53
docker run --name firstdocker_3 -d -p 8083:9000 c98ca0ab7f53

```

### check all containers

```

docker container ls

```

### stop 2 containers

```

docker container stop firstdocker_2 firstdocker_3

```

### check all containers

```

docker container ls -a

```

### remove one container ( delete )

```

docker rm firstdocker_3

```

### last check

```

docker container ls -a

```

[INFO remove Container & Images](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-de)

### Stop in docker desktop

![dektop](/img/desktop.png)
