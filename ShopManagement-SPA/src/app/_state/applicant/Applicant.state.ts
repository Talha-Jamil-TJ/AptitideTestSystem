import {ApplicantModel} from '../../_models/Applicant.model';
import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CreateApplicant, DeleteApplicant, GetApplicants, UpdateApplicant} from './Applicant.actions';
import {HttpClient} from '@angular/common/http';
import {NzNotificationService} from 'ng-zorro-antd';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

export interface ApplicantStateModel {
   Applicants: ApplicantModel[];
}

@State<ApplicantStateModel>({
   name: `Applicant`,
   defaults: {
      Applicants: [],
   },
})
@Injectable()
export class ApplicantState {
   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Action(GetApplicants)
   getApplicant({ patchState }: StateContext<ApplicantStateModel>) {
      return this.http.get<ApplicantModel[]>(environment.apiUrl + `Applicant/`).pipe(
         tap((res) => {
            patchState({
               Applicants: res,
            });
         }),
      );
   }

   @Action(CreateApplicant)
   createApplicant({ dispatch }: StateContext<ApplicantStateModel>, { Applicant }: CreateApplicant) {
      return this.http.post(environment.apiUrl + `Applicant/`, Applicant).pipe(
         tap((res) => {
            dispatch(new GetApplicants());
         }),
      );
   }

   @Action(UpdateApplicant)
   updateApplicant({ dispatch }: StateContext<ApplicantStateModel>, { Applicant }: UpdateApplicant) {
      return this.http.put(environment.apiUrl + `Applicant`, Applicant).pipe(
         tap(() => {
            dispatch(new GetApplicants());
         }),
      );
   }

   @Action(DeleteApplicant)
   deleteApplicant({ dispatch }: StateContext<ApplicantStateModel>, { ApplicantId }: DeleteApplicant) {
      return this.http.delete(environment.apiUrl + `Applicant/${ApplicantId}`);
   }
}
