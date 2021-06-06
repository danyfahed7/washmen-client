FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app && npm install && npm run build

EXPOSE 3000

WORKDIR /usr/src/app/my-app
CMD ["npm", "start"]