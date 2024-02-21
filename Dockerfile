FROM node:18
ADD package*.json /tmp/
RUN cd /tmp/ && npm install
RUN mkdir /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npx prisma generate
RUN rm -rf logs && mkdir logs
EXPOSE 8080
CMD ["npm", "run", "start"]