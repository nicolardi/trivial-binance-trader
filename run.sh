if [ ! -f /data/prices.js ]; then
  cp -r /src /data
fi
npm install
npm start
