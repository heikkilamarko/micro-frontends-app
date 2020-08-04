# Runtime

FROM node:12.18.3-alpine AS runtime

COPY . /app

RUN npm i -g serve

ENTRYPOINT ["serve", "-s", "-p", "80", "--cors", "app"]