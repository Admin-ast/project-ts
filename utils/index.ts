export const numberOptions = (min: number, max: number) => {
  const days = [];
  for (let i = min; i <= max; i++) {
    days.push({ name: i, value: i });
  }
  return days;
};

export const monthOptions = () => {
  const months = [
    { name: "Jan", value: "1" },
    { name: "Feb", value: "2" },
    { name: "Mar", value: "3" },
    { name: "Apr", value: "4" },
    { name: "May", value: "5" },
    { name: "Jun", value: "6" },
    { name: "Jul", value: "7" },
    { name: "Aug", value: "8" },
    { name: "Sep", value: "9" },
    { name: "Oct", value: "10" },
    { name: "Nov", value: "11" },
    { name: "Dec", value: "12" },
  ];
  return months;
};
