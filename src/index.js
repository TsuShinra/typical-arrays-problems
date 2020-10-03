
exports.min = function min (array) {
  if (array === [] || array == 0 || array == undefined) {return 0;}
  else {
    array.sort( (a, b) => a - b );
    return array[0];
  }
  return 0;
};

exports.max = function max (array) {
  if (array === [] || array == 0 || array == undefined) {return 0;}
  else {
    array.sort( (a, b) => a - b );
    return array[(array.length - 1)];
  }
  return 0;
};

exports.avg = function avg (array) {
  let result = 0;
  if ( array == 0 || array == undefined) {return result;}
  if (array !== []) {
    for (let i=0; i < array.length; i+=1) {
      result = result + array[i];
    }
    result = result / array.length;
  }
  return result;
};
