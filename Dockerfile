# Use the latest LTS
FROM ubuntu:16.04

# Install dependencies
# -- apt-transport-https: For Yarn repository and Node repository
# -- curl: For curl command
RUN apt-get update && apt-get install -y \
  apt-transport-https \
  curl \
  vim

# So we can install a Node version higher than what is in Ubuntu's repository
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -

# Add repository for Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install dependencies
# -- yarn: Yarn
# -- nodejs: Node
RUN apt-get update && apt-get install -y \
  yarn \
  nodejs

# Make a directory for the application
RUN mkdir -p /app/src

# Set the directory for following commands
WORKDIR /app

# Copy package.json
COPY package.json \
  yarn.lock \
  .babelrc \
  webpack* \
  /app/

# Install app denpendencies
RUN yarn install

# Copy application code
COPY ./src /app/src

# Expose the port for webpack
EXPOSE 8080
