import requests, json

url = "https://hussbtwjokesapi.pythonanywhere.com/api/randomjoke"
params = "joke"

response = requests.get(url, params)

data = json.loads(response.text)

joke = data["joke"]

choice = input("Hello! I am practicing to become a comedian, and I would like to tell you a joke! Would you like to hear one? (yes/no): ")

if choice == "yes":
  print("Okay!")
  print(joke)

  while True:
    again = input("Would you like to hear another one? (yes/no): ")
    if again == "yes":
      print(joke)
    else:
      break
elif choice == "no":
  print("Okay! Have a nice day, goodbye!")
