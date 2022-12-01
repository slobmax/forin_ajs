export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export function orderByProps(object, array) {
  const arr1 = [];
  const arr2 = [];

  for (const prop in object) {
    if (array.includes(prop)) {
      arr1.push({ key: prop, value: object[prop] });
    } else {
      arr2.push({ key: prop, value: object[prop] });
    }
  }

  arr1.sort((element) => {
    let result;
    if (element.key === array[0]) result = -1;
    if (element.key === array[1]) result = 1;
    return result;
  });

  arr2.sort((prev, next) => {
    let result;
    if (prev.key > next.key) result = 1;
    if (prev.key < next.key) result = -1;
    return result;
  });

  return arr1.concat(arr2);
}
