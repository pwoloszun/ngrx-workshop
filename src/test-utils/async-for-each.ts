import { keys } from 'lodash';

type IIterator<T, K> = (el: T, key: K) => Promise<void>;

export async function arrAsyncForEach<T>(
  items: T[],
  callback: IIterator<T, number>
): Promise<void> {
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    await callback(element, index);
  }
}

type IKey = string | number;

export async function objAsyncForEach<T>(
  items: { [key: IKey]: T; },
  callback: IIterator<T, IKey>
): Promise<void> {
  const allKeys = keys(items);
  for (let index = 0; index < keys.length; index++) {
    const key = allKeys[index];
    const element = items[key];
    await callback(element, index);
  }
}
