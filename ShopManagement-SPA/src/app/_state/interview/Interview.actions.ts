import {InterviewModel} from '../../_models/Interview.model';

export class GetInterviews {
   static readonly type = '[Interview] GetInterview';
}

export class GetInterview {
   static readonly type = '[Interview] GetInterview';

   constructor(public InterviewId: number) {}
}

export class CreateInterview {
   static readonly type = '[Interview] CreateInterview';

   constructor(public Interview: InterviewModel) {}
}

export class UpdateInterview {
   static readonly type = '[Interview] CreateInterview';

   constructor(public Interview: InterviewModel) {}
}

export class DeleteInterview {
   static readonly type = '[Interview] DeleteInterview';

   constructor(public InterviewId: number) {}
}
