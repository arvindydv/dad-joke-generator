
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const p = document.getElementById('joke');
    

    // Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set the request method and URL
xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1', true);

// Set the request headers
xhr.setRequestHeader('X-Api-Key', 'S3HYYIUyPsnEpdlQ4Gxrvw==luUhfGjQYhptPnzS');

// Open the request
xhr.send();
  btn.innerText="fetching a joke..."
  p.innerText = "LOADING..."
// Handle the response
xhr.onload = function() {
  if (xhr.status === 200) {
    // Parse the response data
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    btn.innerText = "TELL ME A JOKE";
    p.innerText = data[0].joke;
  } else {
    console.log('Request failed.  Returned status of ' + xhr.status);
  }
};
});