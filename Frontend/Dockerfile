FROM node:18-alpine as simple-build

WORKDIR /app
COPY . ./
RUN yarn cache clean
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=simple-build /app/build /usr/share/nginx/html
COPY /default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]