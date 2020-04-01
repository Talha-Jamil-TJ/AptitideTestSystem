import {VacancyApplicantModel} from '../../_models/VacancyApplicant.model';
import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CreateVacancyApplicant, DeleteVacancyApplicant, GetVacancyApplicants, UpdateVacancyApplicant} from './VacancyApplicant.actions';
import {HttpClient} from '@angular/common/http';
import {NzNotificationService} from 'ng-zorro-antd';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

export interface VacancyApplicantStateModel {
   VacancyApplicants: VacancyApplicantModel[];
}

@State<VacancyApplicantStateModel>({
   name: `VacancyApplicant`,
   defaults: {
      VacancyApplicants: [],
   },
})
@Injectable()
export class VacancyApplicantState {
   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Action(GetVacancyApplicants)
   getVacancyApplicant({ patchState }: StateContext<VacancyApplicantStateModel>) {
      return this.http.get<VacancyApplicantModel[]>(environment.apiUrl + `VacancyApplicant/`).pipe(
         tap((res) => {
            patchState({
               VacancyApplicants: res,
            });
         }),
      );
   }

   @Action(CreateVacancyApplicant)
   createVacancyApplicant({ dispatch }: StateContext<VacancyApplicantStateModel>, { VacancyApplicant }: CreateVacancyApplicant) {
      return this.http.post(environment.apiUrl + `VacancyApplicant/`, VacancyApplicant).pipe(
         tap((res) => {
            dispatch(new GetVacancyApplicants());
         }),
      );
   }

   @Action(UpdateVacancyApplicant)
   updateVacancyApplicant({ dispatch }: StateContext<VacancyApplicantStateModel>, { VacancyApplicant }: UpdateVacancyApplicant) {
      return this.http.put(environment.apiUrl + `VacancyApplicant`, VacancyApplicant).pipe(
         tap(() => {
            dispatch(new GetVacancyApplicants());
         }),
      );
   }

   @Action(DeleteVacancyApplicant)
   deleteVacancyApplicant({ dispatch }: StateContext<VacancyApplicantStateModel>, { VacancyApplicantId }: DeleteVacancyApplicant) {
      return this.http.delete(environment.apiUrl + `VacancyApplicant/${VacancyApplicantId}`);
   }
}
