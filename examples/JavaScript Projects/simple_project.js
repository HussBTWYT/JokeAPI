const axios = require('axios');
const readlineSync = require('readline-sync');

const apiUrl = 'https://hussbtwjokesapi.pythonanywhere.com/api/randomjoke';

async function getJoke() {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    const joke = data.joke;
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    throw error;
  }
}

function tellJoke() {
  const choice = readlineSync.question(
    'Hello! I am practicing to become a comedian, and I would like to tell you a joke! Would you like to hear one? (yes/no): '
  );

  if (choice.toLowerCase() === 'yes') {
    console.log('Okay!');
    const joke = getJoke();
    console.log(joke);

    while (true) {
      const again = readlineSync.question('Would you like to hear another one? (yes/no): ');
      if (again.toLowerCase() === 'yes') {
        const newJoke = getJoke();
        console.log(newJoke);
      } else if (again.toLowerCase() === 'no') {
        console.log('Okay! I hope you liked my previous joke though! Goodbye!');
        break;
      } else {
        console.log("That's not a valid option!");
      }
    }
  } else if (choice.toLowerCase() === 'no') {
    console.log('Okay! Have a nice day, goodbye!');
  } else {
    console.log("That's not a valid option!");
  }
}

tellJoke();
