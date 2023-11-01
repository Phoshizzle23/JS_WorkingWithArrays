// Declare an array to store the five athletes' names
let athleteNames = [];

// Declare an array to store the five athletes' height in cm
let athleteHeights = [];

// Define a function to store an athlete's information into the arrays
function addAthlete(name, height) {
  // Check if the arrays are already full
  if (athleteNames.length === 5 || athleteHeights.length === 5) {
    return 'array is full';
  }

  // Insert the athlete's name and height into the arrays in sequential order
  const index = athleteNames.length;
  athleteNames[index] = name;
  athleteHeights[index] = height;

  return 'added successfully';
}

// Define a function to remove an athlete's information from the arrays
function removeAthlete(name) {
  // Find the index of the athlete's name in the array
  const index = athleteNames.indexOf(name);

  // If the athlete's name is not found in the array
  if (index === -1) {
    return 'not found';
  }

  // Delete the athlete's name and height from the arrays
  athleteNames.splice(index, 1);
  athleteHeights.splice(index, 1);

  return 'removed successfully';
}
