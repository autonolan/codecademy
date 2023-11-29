const clientID = '65c5a34d2a42454d89501980a9214d54';
const redirectURI='http://localhost:3000/';

export default async function getAccessToken() {
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + clientID;
    url += '&redirect_uri=' + redirectURI;
    const response = await fetch(url, {method: "GET", mode: "cors"});
    console.log(response);
    //const auth = await response.json();
    //console.log(auth);
    return response
};