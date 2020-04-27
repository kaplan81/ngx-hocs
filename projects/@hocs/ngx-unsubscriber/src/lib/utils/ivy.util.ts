import { Type } from '@angular/core';

export function getComponentProp<T, K extends keyof T>(t: Type<T>, key: string): T[K] {
  if (t.hasOwnProperty(key)) {
    return (t as any)[key];
  }

  throw new Error('No Angular property found for ' + t.name);
}
