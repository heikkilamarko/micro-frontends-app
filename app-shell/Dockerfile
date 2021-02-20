# Build

FROM node:14.15.5 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Runtime

FROM node:14.15.5-alpine AS runtime

RUN npm i -g serve

COPY --from=build /app/build /app

ENTRYPOINT ["serve", "-s", "-p", "80", "--cors", "app"]