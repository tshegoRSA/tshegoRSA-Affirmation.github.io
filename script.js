document.getElementById('fetchButton').addEventListener('click', fetchAffirmation);

function fetchAffirmation() {
  // Simulate fetching affirmation from an API
  const affirmations = [
    "You're amazing just the way you are!",
    "You bring joy to everyone around you.",
    "Your smile lights up the room!",
    "You're doing great things, keep it up!",
    "You're stronger than you know."
  ];

  // Randomly select an affirmation
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmation = affirmations[randomIndex];

  // Display the affirmation
  document.getElementById('affirmation').textContent = affirmation;
}
