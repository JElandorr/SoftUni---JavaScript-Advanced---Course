function prevDay(...input) {
  let inputDay = input[2];
  let inputMonth = input[1];
  let inputYear = input[0];

  let resultDay = "";
  let resultMonth = "";
  let resultYear = "";

  let daysPerMonth = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  // let daysPerMonth = [];
  // let days = [];

  // for(let i = 1; i <= 12; i++){
  //     daysPerMonth.push(i);
  // };
  // for(let i = 1; i <= 31; i++){
  //     days.push(i);
  // };
  console.log(daysPerMonth[inputMonth]);

  if (inputDay === 31 && daysPerMonth[inputMonth] === 12) {
    resultYear = inputYear - 1;
  } else {
    resultYear = inputYear;
  }

  let testVar = daysPerMonth[inputMonth];

  if (inputYear % 4 === 0) {
    if (inputDay === 1 && daysPerMonth[inputMonth] === 30) {
      resultDay = 31;
      resultMonth = inputMonth - 1;
    } else if (inputDay === 1 && daysPerMonth[inputMonth] === 31) {
      if (daysPerMonth[inputMonth] === 3) {
        resultDay = 29;
        resultMonth = 2;
      } else {
        if (
          inputMonth === 12 ||
          inputMonth === 10 ||
          inputMonth === 7 ||
          inputMonth === 5
        ) {
          resultDay = 30;
          resultMonth = inputMonth - 1;
        } else if (daysPerMonth[inputMonth] === 1) {
          resultDay = 31;
          resultMonth = 12;
        } else {
          resultDay = 31;
          resultMonth = inputMonth - 1;
        }
      }
    } else {
      resultDay = inputDay - 1;
      resultMonth = inputMonth;
    }
  } else {
    if (inputDay === 1 && daysPerMonth[inputMonth] === 30) {
      resultDay = 31;
      resultMonth = inputMonth - 1;
    } else if (inputDay === 1 && daysPerMonth[inputMonth] === 31) {
      if (inputMonth === 3) {
        resultDay = 28;
        resultMonth = 2;
      } else {
        if (
          inputMonth === 12 ||
          inputMonth === 10 ||
          inputMonth === 7 ||
          inputMonth === 5
        ) {
          resultDay = 30;
          resultMonth = inputMonth - 1;
        } else {
          resultDay = 31;
          resultMonth = inputMonth - 1;
        }
      }
    } else {
      resultDay = inputDay - 1;
      resultMonth = inputMonth;
    }
  }

  let result = `${resultYear}-${resultMonth}-${resultDay}`;

  console.log(result);
}

prevDay(2012, 4, 15);
prevDay(2016, 9, 30);
prevDay(2016, 10, 1);
