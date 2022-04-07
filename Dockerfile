FROM node:12.22-bullseye
COPY . /data
WORKDIR /data
ENV APIKEY=""
ENV APISECRET="" 
VOLUME /data/data
CMD sh run.sh