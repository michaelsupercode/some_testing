# we use the node image (with ubuntu:alpine)  as basis image

FROM node:alpine

# create a folder for the project

RUN mkdir firstdocker

# go to the new folder

WORKDIR /firstdocker

#we copy all ours data in our image

COPY . .

#we create the necessary files

RUN npm i

#We give the PORT number

EXPOSE 9000

#We define the comands to start the container as Array

CMD ["node", "app.js"]

