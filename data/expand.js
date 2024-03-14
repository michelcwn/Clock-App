function dayOfTheYear() {
  const currentDay = new Date();
  const startYear = new Date(currentDay.getFullYear(), 0, 0);
  const difference = currentDay - startYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(difference / oneDay);

  expandValueDays.textContent = `${day}`;
}

dayOfTheYear();

function dayOfTheWeek() {
  const now = new Date();
  const dayOfTheWeek = now.getDay();
  const correctedDay = dayOfTheWeek === 0 ? 7 : dayOfTheWeek;

  expandValueDayWeek.textContent = `${correctedDay}`;
}

dayOfTheWeek();

function getWeekNumber() {
  const now = new Date();
  const FirstJanuary = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor((now - FirstJanuary) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((now.getDay() + 1 + days) / 7);

  expandValueWeekNumber.textContent = `${weekNumber}`;
}

getWeekNumber();
