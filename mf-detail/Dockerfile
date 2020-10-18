# Build

FROM node:14.14.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Runtime

FROM node:14.14.0-alpine AS runtime

RUN npm i -g serve

COPY --from=build /app/build /app

ENTRYPOINT ["serve", "-s", "-p", "80", "--cors", "app"]