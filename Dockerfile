# Use the latest LTS
FROM node:8.9.3

# Install dependencies
RUN apt-get update && apt-get install -y \
  vim

# Make a directory for the application
RUN mkdir app

# Set the directory for following commands
WORKDIR /app

# Copy package.json
COPY package.json \
  package-lock.json \
  /app/

# Install app denpendencies
RUN npm install

# Copy application code
COPY . /app

# Expose the port for webpack
EXPOSE 8080

# Default command associated with the image
CMD ["npm", "start"]
