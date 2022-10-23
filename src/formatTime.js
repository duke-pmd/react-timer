export const formatTime = (time) => {
  const timeValue = isNaN(time) ? 0 : time;
  const getSeconds = Math.floor((timeValue % 3600) % 60)
    .toString()
    .padStart(2, "0");
  const getMinutes = Math.floor((timeValue % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const getHours = Math.floor(timeValue / 3600)
    .toString()
    .padStart(2, "0");
  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
