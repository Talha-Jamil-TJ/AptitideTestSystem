import {VacancyModel} from '../../_models/Vacancy.model';
import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CreateVacancy, DeleteVacancy, GetVacancies, GetVacancy, UpdateVacancy} from './Vacancy.actions';
import {HttpClient} from '@angular/common/http';
import {NzNotificationService} from 'ng-zorro-antd';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

export interface VacancyStateModel {
   vacancies: VacancyModel[];
}

@State<VacancyStateModel>({
   name: `vacancy`,
   defaults: {
      vacancies: [],
   },
})
@Injectable()
export class VacancyState {
   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Action(GetVacancy)
   getVacancy({ patchState }: StateContext<VacancyStateModel>) {
      return this.http.get<VacancyModel[]>(environment.apiUrl + `Vacancy/`).pipe(
         tap((res) => {
            patchState({
               vacancies: res,
            });
         }),
      );
   }

   @Action(CreateVacancy)
   createVacancy({ dispatch }: StateContext<VacancyStateModel>, { vacancy }: CreateVacancy) {
      return this.http.post(environment.apiUrl + `Vacancy/`, vacancy).pipe(
         tap((res) => {
            dispatch(new GetVacancies());
         }),
      );
   }

   @Action(UpdateVacancy)
   updateVacancy({ dispatch }: StateContext<VacancyStateModel>, { vacancy }: UpdateVacancy) {
      return this.http.put(environment.apiUrl + `Vacancy`, vacancy).pipe(
         tap(() => {
            dispatch(new GetVacancies());
         }),
      );
   }

   @Action(DeleteVacancy)
   deleteVacancy({ dispatch }: StateContext<VacancyStateModel>, { vacancyId }: DeleteVacancy) {
      return this.http.delete(environment.apiUrl + `Vacancy/${vacancyId}`);
   }
}
