export const numberOptions = (min: number, max: number) => {
  const days = [];
  for (let i = min; i <= max; i++) {
    days.push({ name: i, value: i });
  }
  return days;
};

let months = [
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
export const monthOptions = () => {
  return months;
};

let monthOrder: { [key: string]: string } = {
  "1": "Jan",
  "2": "Feb",
  "3": "Mar",
  "4": "Apr",
  "5": "May",
  "6": "Jun",
  "7": "Jul",
  "8": "Aug",
  "9": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export const returnMonth = (e: keyof typeof monthOrder) => {
  return monthOrder[e];
};
