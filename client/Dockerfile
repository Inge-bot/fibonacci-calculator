FROM node:14.14.0-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx 
#from statement is a signal that first phase is over
EXPOSE 3000
#tell Elastic beanstalk which port to expose
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build usr/share/nginx/html
#default command of nginx is start - so we dont need to start it ourselves
#use unnamed builder