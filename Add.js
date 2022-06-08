const Add = (str) => {
  if (!str || !str.length) return 0;
  if (str.length === 1) return parseInt(str);

  const negativesSupplied = str.match(/-\d+/g);
  if (negativesSupplied) throw RangeError(`negatives not allowed ${negativesSupplied}`);

  let customDelimiter = str.match(/^\/\/(.)\\n/);
  customDelimiter = customDelimiter && customDelimiter[1];
  const DELIMITERS = `${ customDelimiter || ',' }\n`;
  const re = new RegExp(`${ customDelimiter ? '\/\/.\\n' : '' }[${DELIMITERS}]{2,}`);

  // contiguous occurence of delimiters marks an invalid input
  // based on commucation received over email
  const isInputInvalid = str.match(re);

  if (isInputInvalid) return 0;

  return str.match(/\d+/g).reduce((sum, i) => sum + parseInt(i), 0);
}

export default Add;
