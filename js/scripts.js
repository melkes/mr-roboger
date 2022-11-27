function numberListFunc(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray.map(number => {
    if (number.toString().includes('1')) {
      return 'Beep!';
    } else {
      return number;}})
   
  };
