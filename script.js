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

// Este código asume que ya has obtenido el token de acceso del usuario
// y lo has guardado en la variable "access_token".

// Hacemos una solicitud a la API de Discord para obtener la información del usuario
fetch('https://discord.com/api/users/@me', {
  headers: {
    'Authorization': `Bearer ${access_token}`
  }
})
.then(response => response.json())
.then(data => {
  // Una vez que recibimos la información del usuario, podemos obtener la URL de su imagen de perfil
  const avatarUrl = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`;

  // Actualizamos la imagen del header con la URL de la imagen de perfil del usuario
  const avatarImg = document.querySelector('#avatar');
  avatarImg.src = avatarUrl;
})
.catch(error => console.error(error));
