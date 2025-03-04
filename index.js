// Code your solution in this file!

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hqLocation = 42;
  return Math.abs(someValue - hqLocation);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(someValue) * feetPerBlock;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(start - destination) * feetPerBlock;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Export functions if needed
// module.exports = { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice };
