# Runtime

FROM node:14.15.5-alpine AS runtime

COPY . /app

RUN npm i -g serve

ENTRYPOINT ["serve", "-s", "-p", "80", "--cors", "app"]