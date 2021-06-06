FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app && npm install && npm run build

WORKDIR /usr/src/app/my-app

EXPOSE 3000 3080

CMD ["npm", "start"]