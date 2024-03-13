FROM node:20.11.0
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm i --prod 
CMD ["node", "bin/server.js"]
