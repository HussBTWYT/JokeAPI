[![Python](https://img.shields.io/badge/Python-Flask-blue)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-yellow)](https://nodejs.org/en/)

---
Title: Flask
Description: An API to connect to via HTTP Requests to access jokes.
Tags:
  - python
  - flask
  - jokes
  - jokes api
---

# Package Installation

- Install Python requirements `pip install -r requirements.txt`

# API Usage

This is an API hosted on [Flask](https://flask.palletsprojects.com/en/1.1.x/) app that serves a JSON response according to the [randomly generated] joke.

Note that there are multiple use cases of programming languages that can be used here, and is up to you however PYTHON WILL BE THE MAIN, that is why there is a requirements.txt for python only.

To use this API, run the following example script using the requests libary and json libary:

```python
import requests, json

url = "https://hussbtwjokesapi.pythonanywhere.com/api/randomjoke"
params = "joke"

response = requests.get(url, params)

data = json.loads(response.text)

print(data["joke"])
```

However, python isn't the only way to connect to our Joke API. You can use JavaScript + [{node.js}](https://nodejs.org/en) to also run this program, with the same functionality as the script above.

To run it with JavaScript, use the following command:

```bash
node main.js
```

And to access main.js, you can use the following JavaScript code to connect to our API.

```javascript
// main.js

const url = "https://hussbtwjokesapi.pythonanywhere.com/api/randomjoke";
const params = "joke";

fetch(`${url}?${params}`)
  .then(response => response.json())
  .then(data => console.log(data.joke))
  .catch(error => console.error('Error:', error));
```


The script above connects to the API via the 'requests' libary to connect to the API hosting server, take the argument joke as a paramater, and outputs a json response according to the [randomly generated (from a source)] joke

## ✨ Features

- Python
- Flask
- JSON
- Requests

## Soon to come ✨ Features

- Ruby API Connection
- Additional parameters and more customability to the joke itself, like the type of joke it is, that can be used e.g. with an input of let's say "GENERAL JOKE" and returning that type.

## 💁‍♀️ Reminders for Packages

- Install Python requirements `pip install -r requirements.txt`

