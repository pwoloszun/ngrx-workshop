import { Store } from '@ngrx/store';

import { throwError } from '@utils/throw-error';

type SelectorMappingFn<T> = (state: any) => T;

export function expectStateChanges<T>(
  store: Store,
  expectedStateSnapshots: T[],
  selectorMappings: SelectorMappingFn<T>,
  done = nullFn
): void {
  let i = 0;
  const sub = store.select(
    selectorMappings
  ).subscribe({
    next: (actualState: any) => {
      if (i >= expectedStateSnapshots.length) {
        throwError(`Unexpected state change`);
      }
      const expectedState = expectedStateSnapshots[i];
      expect(actualState).toEqual(expectedState);
      // console.log('[NEXT] expectStateChanges:', i);

      if (i >= expectedStateSnapshots.length - 1) {
        sub.unsubscribe();
        console.log('[DONE] expectStateChanges:');
        done();
      }
      i += 1;
    },
    complete: () => {
      if (i < expectedStateSnapshots.length - 1) {
        throwError(`No enough state changes expected: ${expectedStateSnapshots.length}, got: ${i}`);
      }
    },
  });
}

function nullFn() { }
