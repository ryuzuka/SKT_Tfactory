FROM nginx:1.19.1-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /app
WORKDIR /app
ADD public/. /app

EXPOSE 8082

CMD ["nginx", "-g", "daemon off;"]