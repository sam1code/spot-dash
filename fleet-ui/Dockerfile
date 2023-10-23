
FROM node:19-slim
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "npm-shrinkwrap.json*", "./"]
# RUN yarn install --ignore-scripts
COPY . .
EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
# RUN yarn build
# RUN rm -rf node_modules
RUN yarn --production --ignore-scripts
CMD ["npm", "start"]