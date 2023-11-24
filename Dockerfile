FROM node:20.9.0 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY . .

FROM nginx:1.23.4
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
