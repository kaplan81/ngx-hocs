import { Component, OnDestroy, OnInit } from '@angular/core';
import { autoComplete, Unsubscriber } from '@ngx-hocs/unsubscriber';
import { interval, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Unsubscriber()
@Component({
  templateUrl: './unsubscriber.component.html',
  styleUrls: ['./unsubscriber.component.scss'],
})
export class UnsubscriberComponent implements OnInit, OnDestroy {
  observable$: Observable<number> = interval(1000);
  subscription$$: Subscription;

  ngOnInit(): void {
    this.subscription$$ = this.observable$.pipe(tap(console.log), autoComplete(this)).subscribe();
  }

  ngOnDestroy(): void {
    console.log('this.subscription$$.closed:::', this.subscription$$.closed);
  }
}
