FROM node:10.15.3
MAINTAINER zfeng <i@zfeng.net>

ENV VERSION 0.0.1

WORKDIR /app

ADD . ./
RUN npm install yarn -g
RUN rm -rf dist node_modules
RUN yarn
RUN npm run build
RUN yarn install

ENV NODE_ENV production

CMD ["npm", "run", "start:prod"]

EXPOSE 3000
