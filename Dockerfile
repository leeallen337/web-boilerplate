FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
  apt-transport-https \
  curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y \
  yarn \
  nodejs

RUN mkdir /app

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn --pure-lockfile

COPY . /app

EXPOSE 8080
