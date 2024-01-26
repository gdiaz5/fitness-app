function shortDate(longDate) {
  let date = new Date();
  if (typeof longDate === "string") {
    date = new Date(longDate);
  }
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
  });
}

export default shortDate;
