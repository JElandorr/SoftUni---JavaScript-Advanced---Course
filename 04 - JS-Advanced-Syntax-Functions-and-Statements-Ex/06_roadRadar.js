function roadRadar(detectedSpeed, conditions) {
  let speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  detectedSpeed = Number(detectedSpeed);

  let status;
  let currentConditions;

  for (const key in speedLimits) {
    if (conditions === key) {
      if (
        detectedSpeed - speedLimits[conditions] > 0 &&
        detectedSpeed - speedLimits[conditions] <= 20
      ) {
        status = "speeding";
      } else if (
        detectedSpeed - speedLimits[conditions] > 20 &&
        detectedSpeed - speedLimits[conditions] <= 40
      ) {
        status = "excessive speeding";
      } else if (detectedSpeed - speedLimits[conditions] > 40) {
        status = "reckless driving";
      }
      currentConditions = speedLimits[conditions];
    }
  }
  if (detectedSpeed > currentConditions) {
    console.log(
      `The speed is ${
        detectedSpeed - currentConditions
      } km/h faster than the allowed speed of ${currentConditions} - ${status}`
    );
  } else {
    console.log(`Driving ${detectedSpeed} km/h in a ${currentConditions} zone`);
  }
}

roadRadar("40", "city");
roadRadar("21", "residential");
roadRadar("120", "interstate");
roadRadar("200", "motorway");
