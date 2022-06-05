
const Add = (str) => {
  if (!str || !str.length) return 0;
  if (str.length === 1) return parseInt(str);

  const DELIMITERS = ',\n';
  const re = new RegExp(`[${DELIMITERS}]{2,}`);

  // contiguous occurence of delimiters marks an invalid input
  const isInputInvalid = str.match(re);

  if (isInputInvalid) return 0;

  return str.match(/\d+/g).reduce((sum, i) => sum + parseInt(i), 0);
}

export default Add;
