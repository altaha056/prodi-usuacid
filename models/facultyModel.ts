export default interface FacultyModel {
  faculltyId: string;
  facultyName: string;
  slug: string;
}

export class FacultyMaker {
  static create(event: Record<string, any>): FacultyModel {
    return {
      faculltyId: event.faculty_code,
      facultyName: event.faculty_name,
      slug: event.slug,
    };
  }
}
