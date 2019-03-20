function create(start, finish) {
  const output = [];
  const openHour = parseInt(start.substring(0, 2), 10);
  const closeHour = parseInt(finish.substring(0, 2), 10);
  const openMin = parseInt(start.substring(3, 5), 10);
  const closeMin = parseInt(finish.substring(3, 5), 10);

  // Need to do first hour and last hour separately
  if (openHour !== closeHour) {
    for (let i = openMin; i < 60; i += 15) {
      output.push(createOutputString(openHour, i));
    }
  } else {
    for (let i = openMin; i <= closeMin; i += 15) {
      output.push(createOutputString(openHour, i));
    }
  }

  for (let i = openHour + 1; i < closeHour; i++) {
    for (let j = 0; j < 60; j += 15) {
      output.push(createOutputString(i, j));
    }
  }

  for (let i = 0; i <= closeMin; i += 15) {
    output.push(createOutputString(closeHour, i));
  }
  return output;
}

function createOutputString(hour, min) {
  let extraZero = '';
  if (min === 0) {
    extraZero = '0';
  }

  let outputStr = '';
  if (hour > 12) {
    outputStr += (hour - 12).toString();
  } else if (hour === 0) {
    outputStr += '12';
  } else {
    outputStr += hour.toString();
  }
  outputStr += `:${min.toString()}${extraZero} `;
  if (hour >= 12) {
    outputStr += 'AM';
  } else {
    outputStr += 'PM';
  }

  return outputStr;
}

export default create;