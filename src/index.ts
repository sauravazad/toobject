export default function  convertArrayToObject<T> (input: Array<T>, key: string) {
  let obj = {};
  if (Array.isArray(input)) {
    input.forEach((item, i) => {
      obj[item[key || i]] = item;
    });
  } else {
    obj = input;
  }
  return obj;
};