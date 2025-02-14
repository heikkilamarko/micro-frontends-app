FROM node:lts
COPY . /app
RUN npm i -g serve
ENTRYPOINT ["serve", "-s", "-p", "8080", "--cors", "app"]
