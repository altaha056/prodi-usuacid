export default interface FacultiesModel {
  id: string;
  title: string;
  category: string | null;
  categoryId: number | null;
  shortDescription: string;
  description: string;
  headlineImage: string;
  image: string;
  author: string;
  // date: string;
  language: string;
  slug: string;
  authordiv: string | null;
  photographer: string | null;
  photographerdiv: string | null;
  interviewees: string | null;
  intervieweesdiv: string | null;
  imagetitle: string | null;
  subtitle: string | null;
  inset: string | null;
  career: string;
  contact: string;
}

export class FacultiesMaker {
  static create(event: Record<string, any>): FacultiesModel {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      category: event.category,
      categoryId: event.category_id,
      shortDescription: event.short_description,
      headlineImage: event.headline_image,
      image: event.image,
      author: event.author,
      // date: event.created_at,
      language: event.language,
      slug: event.slug,
      authordiv: event.authordiv || null,
      photographer: event.photographer || null,
      photographerdiv: event.photographerdiv || null,
      interviewees: event.interviewees || null,
      intervieweesdiv: event.intervieweesdiv || null,
      imagetitle: event.imagetitle || null,
      subtitle: event.subtitle || null,
      inset: event.inset || null,
      career: event.career,
      contact: event.contact,
    };
  }
}
