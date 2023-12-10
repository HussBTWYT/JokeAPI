import requests, json

url = "https://hussbtwjokesapi.pythonanywhere.com/api/randomjoke"
params = "joke"

response = requests.get(url, params)

data = json.loads(response.text)

print(data["joke"])
