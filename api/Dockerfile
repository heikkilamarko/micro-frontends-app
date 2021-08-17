FROM node:16-alpine
COPY . /app
RUN npm i -g serve
ENTRYPOINT ["serve", "-s", "-p", "80", "--cors", "app"]
