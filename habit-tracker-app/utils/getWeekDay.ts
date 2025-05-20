const returnWeekDay = () => {
    const today = new Date();
  const dayOfWeekNumber = today.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  return dayOfWeekName
}

export default returnWeekDay