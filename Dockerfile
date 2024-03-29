FROM node:16.4.0-alpine3.12 as builder

ENV NODE_ENV production

# USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm i

# COPY --chown=node:node . .
COPY . .
RUN npm run build 

# ---

FROM nginx:alpine

COPY --from=builder /home/node/build/ /usr/share/nginx/html

RUN ls /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
