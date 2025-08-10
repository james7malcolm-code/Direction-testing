export default function handler(req, res) {
  // Replace with the URL you want to redirect to
  const targetUrl = "http://176.74.228:80";

  res.redirect(302, targetUrl);
}
const https = require('https');

const options = {
  host: 'TARGET_IP_OR_DOMAIN',  // Where you're connecting
  port: 443,
  method: 'GET',
  path: '/',
  headers: {
    'Host': 'x.com',      // Optional: spoof Host header too
  },
  servername: 'x.com'           // <-- This forces SNI to be x.com
};

const req = https.request(options, (res) => {
  console.log('Status:', res.statusCode);
  res.on('data', (chunk) => process.stdout.write(chunk));
});

req.on('error', (err) => console.error('Error:', err));
req.end();
