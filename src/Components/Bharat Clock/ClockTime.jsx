const ClockTime = () => {
  let date = new Date();

  let todayDate = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hours = date.getHours();
  let seconds = date.getSeconds();
  let miliSeconds = date.getMilliseconds();

  let amPm = hours < 12 ? "AM" : "PM";

  //   month = month < 10 ? "0" + month : month;

  if (month.toString().length < 2) month = "0" + month;

  return (
    <>
      <h1>
        Current time is: {todayDate} / {month} / {year} - {hours}:{seconds}:
        {miliSeconds} - {amPm}
      </h1>
    </>
  );
};

export default ClockTime;
