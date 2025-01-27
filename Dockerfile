FROM node:12-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json tsconfig.json wait.sh ./
COPY src ./src
RUN chmod +x /wait
RUN npm install 
EXPOSE 4000
CMD /wait && npm start