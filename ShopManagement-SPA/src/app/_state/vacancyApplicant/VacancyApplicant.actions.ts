import {VacancyApplicantModel} from '../../_models/VacancyApplicant.model';

export class GetVacancyApplicants {
   static readonly type = '[VacancyApplicant] GetVacancyApplicant';
}

export class GetVacancyApplicant {
   static readonly type = '[VacancyApplicant] GetVacancyApplicant';

   constructor(public VacancyApplicantId: number) {}
}

export class CreateVacancyApplicant {
   static readonly type = '[VacancyApplicant] CreateVacancyApplicant';

   constructor(public VacancyApplicant: VacancyApplicantModel) {}
}

export class UpdateVacancyApplicant {
   static readonly type = '[VacancyApplicant] CreateVacancyApplicant';

   constructor(public VacancyApplicant: VacancyApplicantModel) {}
}

export class DeleteVacancyApplicant {
   static readonly type = '[VacancyApplicant] DeleteVacancyApplicant';

   constructor(public VacancyApplicantId: number) {}
}
