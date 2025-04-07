# Step 1: Use Node.js 23.9-alpine3.20 as the base image (https://hub.docker.com/_/node?tab=description&amp%3Bpage=1&amp%3Bname=alpine)
FROM node:current-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Step 2: Use an Nginx image to serve the static files
# (https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/)
# (https://nginx.org/en/docs/beginners_guide.html#proxy)

FROM nginx:alpine 

# Setup working directory
WORKDIR /usr/share/nginx/html

# Remove the placeholder site from the Nginx image
RUN rm -rf ./*

# Copy the static files from the previous stage
COPY --from=build /app/dist .

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port
EXPOSE 8080

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]

