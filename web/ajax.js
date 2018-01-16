var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("post", "http://192.168.11.178:4000/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.send(JSON.stringify({ query: "{hello}" }));
xhr.onload = function() {
    console.log('data returned:', xhr.response);
}