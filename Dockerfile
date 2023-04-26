FROM node:18.12-alpine3.16 as builder
RUN apk add --no-cache make gcc g++ python3 git libc6-compat openssl
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock decorate-angular-cli.js ./
RUN yarn install --pure-lockfile --non-interactive
COPY . .
RUN yarn nx run ui:build:production
FROM nginx:1.23.1-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/apps/ui /usr/share/nginx/html
EXPOSE 80