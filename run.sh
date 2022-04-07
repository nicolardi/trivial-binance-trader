npm install
echo APIKEY="$1" > .env
echo APISECRET="$2" > .env
node prices.js
