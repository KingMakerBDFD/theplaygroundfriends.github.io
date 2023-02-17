const clientId = '1076279108302028841';
const clientSecret = '7OP0f5OdxOKq-8Qi5sskJthFu6bDwv-h';
const redirectUri = 'hamchi.ml/#';

function discordLogin() {
  window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1076279108302028841&redirect_uri=https%3A%2F%2Fhamchi.ml%2F%23&response_type=code&scope=identify%20email';
}

if (window.location.search.includes('?code=')) {
  const code = window.location.search.split('?code=')[1];
  const postData = new URLSearchParams();
  postData.append('client_id', clientId);
  postData.append('client_secret', clientSecret);
  postData.append('grant_type', 'authorization_code');
  postData.append('code', code);
  postData.append('redirect_uri', redirectUri);
  postData.append('scope', 'email identify');
  fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: postData
  })
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    // Use the access token to make API requests on behalf of the user
  })
  .catch(error => console.error(error));
}
