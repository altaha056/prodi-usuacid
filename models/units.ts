export default interface UnitModel {
  faculty: string;
  major: string;
  accreditation: string;
  graduationDegree: string;
  level: string;
}

export class UnitMaker {
  static create(event: Record<string, any>): UnitModel {
    return {
      faculty: event.faculty,
      major: event.study_program,
      graduationDegree: event.graduation_degree,
      accreditation: event.accreditation,
      level: event.level,
    };
  }
}
