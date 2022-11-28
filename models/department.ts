export default interface DepartmentModel {
  id: string;
  facultyCode: null;
  majorCode: string;
  title: string;
  slug: string;
  language: string;
  shortDescription: string;
  headlineImage: null;
  certificateImage: null;
  certificateDescription: string;
  educationFee: EducationFee[];
  descriptionFee: string;
  excellence: string;
  career: string;
  author: string;
  authordiv: string;
  researchers: string;
  researchersdiv: string;
  photographer: string;
  photographerdiv: string;
  inset: string;
  categoryId: string;
  category: string;
  selected: boolean;
  createdBy: string;
  updatedBy: string;
  createadAt: number;
  updatedAt: number;
}

export interface EducationFee {
  fee: Fee[];
  name: string;
  education_level: string;
  id: string;
  education_level_name: string;
  class: string;
}

export interface Fee {
  amount: string;
  level: number;
  type: string;
}

export class DepartmentMaker {
  static create(event: Record<string, any>): DepartmentModel {
    return {
      id: event.id,
      facultyCode: event.faculty_code,
      majorCode: event.major_code,
      title: event.title,
      slug: event.slug,
      language: event.language,
      shortDescription: event.short_description,
      headlineImage: event.headline_image,
      certificateImage: event.certificate_image,
      certificateDescription: event.certificate_description,
      educationFee: event.education_fee,
      descriptionFee: event.description_fee,
      excellence: event.excellence,
      career: event.career,
      author: event.author,
      authordiv: event.authordiv,
      researchers: event.researchers,
      researchersdiv: event.researchersdiv,
      photographer: event.photographer,
      photographerdiv: event.photographerdiv,
      inset: event.inset,
      categoryId: event.category_id,
      category: event.category,
      selected: event.selected,
      createdBy: event.created_by,
      updatedBy: event.updated_by,
      createadAt: event.createad_at,
      updatedAt: event.updated_at,
    };
  }
}
