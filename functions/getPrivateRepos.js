const fetch = require('node-fetch');
exports.handler = async () => {
  const resp = await fetch('https://api.github.com/user/repos', {
    headers: { Authorization: `token ${process.env.GH_TOKEN}` }
  });
  const data = await resp.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};