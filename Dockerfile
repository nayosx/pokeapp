FROM node:12 AS my-app-build
WORKDIR /app
#COPY package.json /app
#RUN npm install
COPY . .
RUN npm install -g @angular/cli && npm i 
RUN ng build --prod 
RUN ls -ltra /app/

FROM nginx:alpine
COPY --from=my-app-build /app/dist/ /usr/share/nginx/html
EXPOSE 80