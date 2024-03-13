document.getElementById('fetchButton').addEventListener('click', fetchAffirmation);

async function fetchAffirmation() {
    try {
      const response = await fetch('https://inspirational-quotes.azurewebsites.net/api/Quotes');
      const data = await response.json();
  
      if (data.text) {
        // Display the affirmation
        document.getElementById('affirmation').textContent = data.text;
      } else {
        throw new Error('No affirmation found');
      }
    } catch (error) {
      console.error('Error fetching affirmation:', error.message);
      document.getElementById('affirmation').textContent = 'Oops! Something went wrong. Please try again later.';
    }
  }
  