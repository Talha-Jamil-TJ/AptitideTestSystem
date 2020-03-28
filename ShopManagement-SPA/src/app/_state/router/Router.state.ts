import {Action, State, StateContext} from '@ngxs/store';
import {Router} from '@angular/router';
import {Injectable, NgZone} from '@angular/core';

export class Navigate {
   static readonly type = '[router] navigate';
   constructor(public payload: string) {}
}

@State({
   name: 'router',
   defaults: '',
})
@Injectable()
export class RouterState {
   constructor(private router: Router, private ngZone: NgZone) {}

   @Action(Navigate)
   async changeRoute(context: StateContext<string>, action: Navigate) {
      const path = action.payload;
      this.ngZone.run(() => {
         this.router.navigate([path]);
      });
      context.setState(path);
   }
}
