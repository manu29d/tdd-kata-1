const Add = (str) => {
  if (!str || !str.length) return 0;
  if (str.length === 1) return parseInt(str);
  const numbers = str.split(',');
  return numbers.reduce((sum, i) => sum + parseInt(i), 0);
}

export default Add;
