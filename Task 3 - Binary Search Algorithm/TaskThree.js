// Declare an array to store the athletes' names
let athleteNames = [];

// Declare an array to store the athletes' height in cm
let athleteHeights = [];

// Define a function to find the position of an athlete in the name array
function findAthlete(name) {
  // Use binary search to find the position of the athlete in the array
  let low = 0;
  let high = athleteNames.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (athleteNames[mid] < name) {
      low = mid + 1;
    } else if (athleteNames[mid] > name) {
      high = mid - 1;
    } else {
      // If the athlete's name is found in the array
      document.getElementById('result').innerHTML = `Athlete ${name} found at position ${mid}`;
      return;
    }
  }

  // If the athlete's name is not found in the array
  document.getElementById('result').innerHTML = 'Athlete not found';
  return -1;
}

// Define a function to add an athlete's information to the arrays
function saveAthlete() {
  // Get the input values from the form
  const name = document.getElementById('nameInput').value.trim();
  const height = document.getElementById('heightInput').value.trim();

  // Validate the input values
  if (!name || !height) {
    document.getElementById('result').innerHTML = 'Please enter a valid name and height';
    return;
  }

  // Check if the name is already in the array
  if (findAthlete(name) !== -1) {
    document.getElementById('result').innerHTML = 'Athlete already exists';
    return;
  }

  // Validate the height input
  if (isNaN(height) || height <= 0) {
    document.getElementById('result').innerHTML = 'Please enter a valid height';
    return;
  }

  // Check if the arrays are already full
  if (athleteNames.length === 5 || athleteHeights.length === 5) {
    document.getElementById('result').innerHTML = 'Array is full';
    return;
  }

  // Add the athlete's name and height to the arrays
  athleteNames.push(name);
  athleteHeights.push(height);

  // Sort the athleteNames array before using binary search
  athleteNames.sort();

  document.getElementById('result').innerHTML = 'Athlete saved successfully';
}