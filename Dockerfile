FROM node:20.9.0 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:1.23.4
COPY --from=build /usr/local/app/dist /usr/share/nginx/html
EXPOSE 3000