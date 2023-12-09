---
Title: Flask
Description: An API to connect to via HTTP Requests to access jokes.
Tags:
  - python
  - flask
  - jokes
  - jokes api
---

# API Usage

This is an API hosted on [Flask](https://flask.palletsprojects.com/en/1.1.x/) app that serves a JSON response according to the [randomly generated] joke.

To use this API, run the following example script using the requests libary and json libary:

```python
import requests, json

url = "https://hussbtwjokesapi.pythonanywhere.com/api/randomjoke"
params = "joke"

response = requests.get(url, params)

data = json.loads(response.text)

print(data["joke"])
```

## ✨ Features

- Python
- Flask

## 💁‍♀️ How to use

- Install Python requirements `pip install -r requirements.txt`
- Start the server for development `python3 main.py`
