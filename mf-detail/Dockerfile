FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine
RUN npm i -g serve
COPY --from=build /app/dist /app
ENTRYPOINT ["serve", "-s", "-p", "80", "--cors", "app"]
