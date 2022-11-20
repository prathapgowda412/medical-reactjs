function capitalizeFirstLetter(str) {
  let char = str.split('');
  char[0] = char[0].toUpperCase();
  let final = char.join('');

  return final;
}

export { capitalizeFirstLetter };
