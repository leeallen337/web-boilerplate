# Use the latest slim LTS
FROM node:6.10.2-slime

# Install dependencies
RUN apt-get update && apt-get install -y \
  vim

# Make a directory for the application
RUN mkdir app

# Set the directory for following commands
WORKDIR /app

# Copy package.json
COPY package.json \
  yarn.lock \
  /app/

# Install app denpendencies
RUN yarn install

# Copy application code
COPY . /app

# Expose the port for webpack
EXPOSE 8080
