const calculate = document.getElementById("calculation");
const result = document.getElementById("result");
const day = document.getElementById("dd");
const month = document.getElementById("mm");
const year = document.getElementById("yyyy");
resultContent = document.createElement("h2");
result.appendChild(resultContent);
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// const DAY = [
//   "Monday",
//   "Tuseday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

const MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const PERIOD_DAY = 28;

calculate.addEventListener("click", function (e) {
  e.preventDefault;
  if (
    day.value.length === 0 ||
    month.value.length === 0 ||
    year.value.length === 0
  ) {
    window.alert("Date is required");
    return;
  }

  let dd = parseInt(day.value);
  let mm = parseInt(month.value);
  let yyyy = parseInt(year.value);

  if (isNaN(dd) || isNaN(mm) || isNaN(yyyy)) {
    window.alert("Date must be a number");
    return;
  }

  if (yyyy < 2000) {
    window.alert("Year starts from 2000");
    return;
  }

  if (mm > 12 || mm == 0) {
    window.alert("Month must be from 1 to 12");
    return;
  }

  if (mm == 2 && isLeapYear(yyyy)) {
    if (dd > 29) {
      window.alert(`${dd} is NOT available in ${MONTH[mm - 1]}`);
      return;
    }
  } else {
    if (dd > MONTH_LENGTH[mm - 1]) {
      window.alert(`${dd} is NOT available in ${MONTH[mm - 1]}`);
      return;
    }
  }

  

  if(dd + PERIOD_DAY < MONTH_LENGTH[mm - 1]){
    resultContent.textContent = `Your next period day: ${mm}/${dd + PERIOD_DAY}/${yyyy}`;
  }else{
    if(mm == 2 && isLeapYear(yyyy)){
        const DAY_OF_MONTH = MONTH_LENGTH[mm - 1] + 1;
        if(dd == 1){
            resultContent.textContent = `Your next period day: 2/29/${yyyy}`;
        }else{
            resultContent.textContent = `Your next period day: ${mm + 1}/${PERIOD_DAY - DAY_OF_MONTH + dd}/${yyyy}`;
        }
    }
    else if(mm != 12){
        resultContent.textContent = `Your next period day: ${mm + 1}/${PERIOD_DAY - MONTH_LENGTH[mm - 1] + dd}/${yyyy}`;
    }else{
        resultContent.textContent = `Your next period day: ${1}/${PERIOD_DAY - MONTH_LENGTH[mm - 1] + dd}/${yyyy + 1}`;
    }
  }

  console.log(day.value);
  console.log(parseInt(day.value) === NaN);
  console.log(yyyy);
});

const isLeapYear = function (yyyy) {
  if (yyyy % 4 == 0) {
    if (yyyy % 100 == 0) {
      if (yyyy % 400 == 0) return true;
      return false;
    }
  }

  return false;
};
