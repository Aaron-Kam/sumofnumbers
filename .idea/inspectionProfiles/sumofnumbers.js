let numbers = [0,2,4,6,8,10];

function sumFor(data) {
  let total = 0;
  for(num in data) {
    total += data;
  }
  return total;
}

function sumWhile(data) {
  let total = 0;
  let i = 0;
  while (i < data.length) {
    total += data[i++];
  }
  return total;
}

function sumRecursion(data, count) {
  if (count === data.length) {
    return 0;
  }
  return sumRecursion(data,count + 1) + 1;
}

function sumTheSimpleWay(data) {
  return _.reduce(data);
}
