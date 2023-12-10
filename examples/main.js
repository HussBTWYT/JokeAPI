const url = "https://hussbtwjokesapi.pythonanywhere.com/api/randomjoke";
const params = "joke";

fetch(`${url}?${params}`)
  .then(response => response.json())
  .then(data => console.log(data.joke))
  .catch(error => console.error('Error:', error));

