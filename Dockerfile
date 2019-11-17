FROM node:10.8 as build

WORKDIR /usr/src/app

COPY package*.json ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install
RUN npm install -g @angular/cli@6.1.1 --unsafe
COPY . .

ARG enviroment=production
RUN npm run build:$enviroment

FROM nginx
COPY --from=build /usr/src/app/dist/main-site /usr/share/nginx/html
