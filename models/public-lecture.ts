export default interface PublicLectureModel {
  id: string;
  lecturerName: number;
  photo: string;
  description: string;
  profession: string;
  link: string;
  language: string;
  date: string | null;
}

export class PublicLectureMaker {
  static create(event: Record<string, any>): PublicLectureModel {
    return {
      id: event.id,
      description: event.description,
      link: event.link,
      photo: event.photo,
      lecturerName: event.lecture_name,
      profession: event.profession,
      language: event.language,
      date: event.created_at || null,
    };
  }
}
