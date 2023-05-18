FROM node:18.12-alpine3.16 as node
RUN apk add --no-cache make gcc g++ python3 git libc6-compat openssl
RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm install -g npm@9.6.6
COPY . .
RUN npm run build
FROM nginx:1.23.1-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/apps/ui /usr/share/nginx/html
EXPOSE 80