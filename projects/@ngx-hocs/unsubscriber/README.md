# @ngx-hocs/unsubscriber

Higher-oder component to automatically unsubscribe from observables in Angular component classes.

## Prerequisite

Your Angular project must be running at least Angular version 9.

If that is not a problem, install the library:

```bash
npm i @ngx-hocs/unsubscriber
```

## Usage

Just import the `Unsubscriber` function in your component class and use it as a [Typescript Class decorator](https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators).

With that in place, whenever you need to subscribe to an observable in your component, just add this at the end of your RxJS pipes: `takeUntil((this as any).destroyed$)`.

As simple as that.

You do not need to implement the `OnDestroy` interface so you would only need to write the `ngOnDestroy()` method is you needed to add extra actions to that Angular lifecycle hook.

```ts
import { Unsubscriber } from '@ngx-hocs/unsubscriber';

@Unsubscriber()
@Component({})
export class SubscribedComponent implements OnInit, OnDestroy {
  observable$: Observable<number> = interval(1000);
  subscription$$: Subscription;

  ngOnInit(): void {
    this.subscription$$ = this.observable$
      .pipe(tap(console.log), takeUntil((this as any).destroyed$))
      .subscribe();
  }

  // Extra actions (optional).
  ngOnDestroy(): void {
    console.log('this.subscription$$.closed:::', this.subscription$$.closed);
  }
}
```