import { forEach } from 'lodash';

export function expectElementsToContainTexts(domElements: HTMLElement[], expectedResults: string[]) {
  expect(domElements.length).toEqual(expectedResults.length);
  forEach(expectedResults, (expResult, i) => {
    const listItem = domElements[i];
    expect(listItem).toHaveTextContent(expResult)
  });
}
