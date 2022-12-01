import { obj, orderByProps } from '../app';

test('Проверка сортировки функции orderByProps', () => {
  const received = orderByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(received).toEqual(expected);
});

test('Проверка сортировки по передаваемому массиву', () => {
  const received = orderByProps(obj, ['level', 'name']);
  const expected = [
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(received[0].key).toBe(expected[0].key);
  expect(received[1].key).toBe(expected[1].key);
});
