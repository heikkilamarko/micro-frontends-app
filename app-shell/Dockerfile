FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY ./Caddyfile /etc/caddy/
COPY --from=build /app/dist /usr/share/app
