# ngx-hocs-unsubscriber

Higher-oder component to automatically unsubscribe from observables in Angular component classes.

## Prerequisite

Your Angular project must be running at least Angular version 9.

If that is not a problem, install the library:

```bash
npm i ngx-hocs-unsubscriber
```

## Usage

Just import `Unsubscriber` and `autoComplete` in your component class.

Use `Unsubscriber` as a [Typescript Class decorator](https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators) and `autoComplete(this)` as a RxJS operator, right at the end of your pipe/s.

As simple as that.

You do not need to implement the `OnDestroy` interface so you would only need to write the `ngOnDestroy()` method if you needed to add extra actions to that Angular lifecycle hook.

```ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { autoComplete, Unsubscriber } from 'ngx-hocs-unsubscriber';
import { interval, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Unsubscriber()
@Component({})
export class SubscribedComponent implements OnInit, OnDestroy {
  observable$: Observable<number> = interval(1000);
  subscription$$: Subscription;

  ngOnInit(): void {
    this.subscription$$ = this.observable$
      .pipe(tap(console.log), takeUntil(autoComplete(this))
      .subscribe();
  }

  // Extra actions (optional).
  ngOnDestroy(): void {
    console.log('this.subscription$$.closed:::', this.subscription$$.closed);
  }
}
```

## Golden rules

* Use `autoComplete` always at the end of the pipe.
* Do not implement `OnDestroy` if you do not need extra actions. The purpose of this library is no only to avoid memory leaks but also the unsubscription boilerplate.
* If you use `sharedReplay` do not forget to set `refCount` to `true`:

```ts
obs$.pipe(shareReplay({ refCount: true }), autoComplete(this))
```

To avoid surprises it is recommended that you always use the signature that takes the config parameter. And if you want to make sure of that, you can use TSLint for that:

```bash
npm i -D rxjs-tslint-rules
```

And in your `tslint.json`:

```json
{
  "extends": [
    "rxjs-tslint-rules"
  ],
  "rules": {
    "rxjs-no-sharereplay": {
      "options": [{
        "allowConfig": true
      }],
      "severity": "error"
    }
  }
}
```

## Golden rules

You have resolved the unsubscription problem with 2 lines of code:

```ts
@Unsubscriber()
[...]
  autoComplete(this)
```

Happy Angular coding!
