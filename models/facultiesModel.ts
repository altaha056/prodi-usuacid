interface Major {
  major_code: string;
  education_level: string;
  major_name: string;
  education_level_name: string;
  slug: string;
}
export default interface FacultiesModel {
  id: string;
  facultyCode: string;
  headlineImage: string;
  image: string;
  title: string;
  slug: string;
  language: string;
  shortDescription: string;
  slider1: string;
  slider2: string;
  slider3: string;
  slider4: null;
  slider5: null;
  majors: Major[];
  visionDescription: string;
  vision: string;
  mission: string;
  visionImage: string;
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
  createdAt: number;
  updatedAt: number;
}

export class FacultiesMaker {
  static create(event: Record<string, any>): FacultiesModel {
    return {
      id: event.id,
      facultyCode: event.faculty_code,
      headlineImage: event.headline_image,
      image: event.image,
      title: event.title,
      slug: event.slug,
      language: event.language,
      shortDescription: event.short_description,
      slider1: event.slider1,
      slider2: event.slider2,
      slider3: event.slider3,
      slider4: event.slider4,
      slider5: event.slider5,
      majors: event.majors,
      visionDescription: event.vision_description,
      vision: event.vision,
      mission: event.mission,
      visionImage: event.vision_image,
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
      updatedAt: event.updated_at,
      createdAt: event.created_at,
    };
  }
}
