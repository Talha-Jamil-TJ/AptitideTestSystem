import {InterviewModel} from '../../_models/Interview.model';
import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CreateInterview, DeleteInterview, GetInterviews, UpdateInterview} from './Interview.actions';
import {HttpClient} from '@angular/common/http';
import {NzNotificationService} from 'ng-zorro-antd';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

export interface InterviewStateModel {
   Interviews: InterviewModel[];
}

@State<InterviewStateModel>({
   name: `Interview`,
   defaults: {
      Interviews: [],
   },
})
@Injectable()
export class InterviewState {
   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Action(GetInterviews)
   getInterview({ patchState }: StateContext<InterviewStateModel>) {
      return this.http.get<InterviewModel[]>(environment.apiUrl + `Interview/`).pipe(
         tap((res) => {
            patchState({
               Interviews: res,
            });
         }),
      );
   }

   @Action(CreateInterview)
   createInterview({ dispatch }: StateContext<InterviewStateModel>, { Interview }: CreateInterview) {
      return this.http.post(environment.apiUrl + `Interview/`, Interview).pipe(
         tap((res) => {
            dispatch(new GetInterviews());
         }),
      );
   }

   @Action(UpdateInterview)
   updateInterview({ dispatch }: StateContext<InterviewStateModel>, { Interview }: UpdateInterview) {
      return this.http.put(environment.apiUrl + `Interview`, Interview).pipe(
         tap(() => {
            dispatch(new GetInterviews());
         }),
      );
   }

   @Action(DeleteInterview)
   deleteInterview({ dispatch }: StateContext<InterviewStateModel>, { InterviewId }: DeleteInterview) {
      return this.http.delete(environment.apiUrl + `Interview/${InterviewId}`);
   }
}
