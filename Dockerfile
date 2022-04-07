FROM node:12.22-bullseye
COPY . /data
WORKDIR /data
#create 2 env variables called apikey and apisecret
ENV apikey $apikey
ENV apisecret $apisecret
CMD sh run.sh $apikey $apisecret