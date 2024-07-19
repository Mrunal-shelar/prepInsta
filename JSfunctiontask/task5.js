function metersToFeet(meters) {
    const feet = meters * 3.281; // Conversion factor from meters to feet
    console.log(`${meters} meters is equal to ${feet.toFixed(2)} feet.`);
}

function feetToMeters(feet) {
    const meters = feet * 0.3048; // Conversion factor from feet to meters
    console.log(`${feet} feet is equal to ${meters.toFixed(2)} meters.`);
}

metersToFeet(5);
feetToMeters(10.30);