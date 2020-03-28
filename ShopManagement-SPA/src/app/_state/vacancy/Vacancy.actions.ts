import {VacancyModel} from '../../_models/Vacancy.model';

export class GetVacancies {
   static readonly type = '[Vacancy] GetVacancies';
}

export class GetVacancy {
   static readonly type = '[Vacancy] GetVacancy';

   constructor(public vacancyId: number) {}
}

export class CreateVacancy {
   static readonly type = '[Vacancy] CreateVacancy';

   constructor(public vacancy: VacancyModel) {}
}

export class UpdateVacancy {
   static readonly type = '[Vacancy] CreateVacancy';

   constructor(public vacancy: VacancyModel) {}
}

export class DeleteVacancy {
   static readonly type = '[Vacancy] DeleteVacancy';

   constructor(public vacancyId: number) {}
}
