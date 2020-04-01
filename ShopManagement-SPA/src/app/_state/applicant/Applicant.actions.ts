import {ApplicantModel} from '../../_models/Applicant.model';

export class GetApplicants {
   static readonly type = '[Applicant] GetApplicant';
}

export class GetApplicant {
   static readonly type = '[Applicant] GetApplicant';

   constructor(public ApplicantId: number) {}
}

export class CreateApplicant {
   static readonly type = '[Applicant] CreateApplicant';

   constructor(public Applicant: ApplicantModel) {}
}

export class UpdateApplicant {
   static readonly type = '[Applicant] CreateApplicant';

   constructor(public Applicant: ApplicantModel) {}
}

export class DeleteApplicant {
   static readonly type = '[Applicant] DeleteApplicant';

   constructor(public ApplicantId: number) {}
}
