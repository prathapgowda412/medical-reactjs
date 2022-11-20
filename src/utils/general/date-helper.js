const getDateFormat = (dat) => {
  let date = new Date(dat);
  return date.toLocaleDateString('en-US');
};

export { getDateFormat };
