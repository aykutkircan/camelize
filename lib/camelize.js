function camelize(str) {

  if(!str){
    return new Error('input cannot be blank')
  }

  if(typeof str !== 'string'){
    return new Error('input must be of a string type')
  }

  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

module.exports = { camelize };
