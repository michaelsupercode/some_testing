# React + Docker

### VERSION A: For DEVELOPER purposes yes, but not for Production

VERSION A: [How to Use Docker with React and Vite](https://www.webdevolution.com/blog/how-to-use-docker-with-react-and-vite)

Create Dockerfile

```
# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose a port to communicate with the React app
EXPOSE 5173

# Start your React app
CMD ["npm", "run", "dev"]
```

This Dockerfile is suitable for development purposes. For production, you would normally use a multi-stage build in to separate the build environment from the runtime environment. For example, you may want to run the application on a production-ready server (e.g. Nginx) instead of on the development server provided by the npm script.. (VERSION B below)

Create .dockignore

```
README.md
dist
node_modules
package-lock.json
.git
```

IN terminal:

docker build .
docker image ls
docker run --name reactdocker_01 -d -p 8050:5173 c6ab3a2a9231
docker container ls

![code](/img/code.png)
![code](/img/result.png)

### VERSION B: Für Production & Deployment

VERSION B: [Running a React Vite App in Docker Using NGINX](https://medium.com/@fullstackmatt/running-a-react-vite-app-in-docker-using-nginx-414ff9a302c5)

Create Dockerfile

```
# Use the official Nginx image with the Alpine Linux distribution as the base image
FROM nginx:alpine

# Copy the contents of the 'dist' directory to the specified path within the image
COPY dist /usr/share/nginx/html

```

the Dockerfile sets up an Nginx server using the Alpine Linux distribution as a base, and it copies the contents of the "dist" directory to the location where Nginx expects its static files. This is a common approach for deploying static websites using Docker and Nginx.
