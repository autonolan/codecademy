const clientID = '65c5a34d2a42454d89501980a9214d54';
const clientSecret = 'e895b9323b7345b4ae4f640f99262afc';
const redirectURI='http://localhost:3000/';

export default async function getAccessToken() {
    let url = 'https://accounts.spotify.com/api/token';
    //url += '?response_type=token';
    //url += '&client_id=' + encodeURIComponent(clientID);
    //url += '&redirect_uri=' + encodeURIComponent(redirectURI);
    const response = await fetch(url, {method: "POST", headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }, body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret});
    console.log(response);
    const auth = await response.json();
    console.log(auth);
    return auth
};