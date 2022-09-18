function prevDay(year, month, day) {
  const inputDate = new Date(year, month - 1, day);
  inputDate.setDate(inputDate.getDate() - 1);
  console.log(
    `${inputDate.getFullYear()}-${
      inputDate.getMonth() + 1
    }-${inputDate.getDate()}`
  );
}

prevDay(2012, 4, 15);
prevDay(2016, 9, 30);
prevDay(2016, 10, 1);
