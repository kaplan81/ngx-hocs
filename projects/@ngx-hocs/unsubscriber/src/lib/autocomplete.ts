import { MonoTypeOperatorFunction } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export function autoComplete(cmp: any): MonoTypeOperatorFunction<any> {
  return takeUntil(cmp.destroyed$);
}
