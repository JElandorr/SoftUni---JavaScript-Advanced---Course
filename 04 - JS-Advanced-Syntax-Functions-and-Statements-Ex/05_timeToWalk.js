function walk(stepsCount, stepsLength, speed) {
  let speedMS = (speed * 1000) / 3600;
  let distanceM = stepsCount * stepsLength;
  let rest = Math.floor(distanceM / 500);
  let timeS = distanceM / speedMS + rest * 60;

  let hours = Math.floor(timeS / 3600);
  if (hours > 0) {
    timeS -= hours * 3600;
  }

  let minutes = Math.floor(timeS / 60);
  if (minutes > 0) {
    timeS -= minutes * 60;
  }

  let seconds = Math.ceil(timeS);

  if (hours <= 10) {
    hours = "0" + hours.toString();
  } else {
    hours = hours.toString();
  }

  if (minutes <= 10) {
    minutes = "0" + minutes.toString();
  } else {
    minutes = minutes.toString();
  }

  if (seconds <= 10) {
    seconds = "0" + seconds.toString();
  } else {
    seconds = seconds.toString();
  }

  console.log(`${hours}:${minutes}:${seconds}`);
}

walk(6582, 0.7, 4);
walk(4000, 0.6, 5);
walk(2564, 0.7, 5.5);
