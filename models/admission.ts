export default interface AdmissionModel {
  id: string;
  language: string;
  title: string;
  description: string;
  department: string;
  faculty: string;
  student: string;
  independent: string;
  postgraduate: string;
  extension: string;
  diploma: string;
  ppds: string;
  diplomafee: string;
  graduatefee: string;
  postgraduatefee: string;
  profesionfee: string;
  scholarship: string;
  selected: boolean;
}

export class AdmissionMaker {
  static create(event: Record<string, any>): AdmissionModel {
    return {
      id: event.id,
      language: event.language,
      title: event.title,
      description: event.description,
      department: event.department,
      faculty: event.faculty,
      student: event.student,
      independent: event.independent,
      postgraduate: event.postgraduate,
      extension: event.extension,
      diploma: event.diploma,
      ppds: event.ppds,
      diplomafee: event.diplomafee,
      graduatefee: event.graduatefee,
      postgraduatefee: event.postgraduatefee,
      profesionfee: event.profesionfee,
      scholarship: event.scholarship,
      selected: event.selected,
    };
  }
}
