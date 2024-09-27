FROM node:20-alpine AS frontend-builder

WORKDIR /app
COPY . /app

RUN npm install \
    && npm run build

FROM nginx:alpine AS nginx

COPY --from=frontend-builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
