export type FigureType = 'DOSEN' | 'MAHASISWA' | 'TOKOH';

export default interface FigureModel {
  id: string;
  name: string;
  category: FigureType;
  image: string;
  shortDescription: string;
  description: string;
  language: string;
  slug: string;
  date: string;
  author: string | null;
  authordiv: string | null;
  photographer: string | null;
  photographerdiv: string | null;
  interviewees: string | null;
  intervieweesdiv: string | null;
  imagetitle: string | null;
}

export class FigureMaker {
  static create(event: Record<string, any>): FigureModel {
    return {
      id: event.id,
      name: event.name,
      image: event.image,
      category: event.category,
      shortDescription: event.short_description,
      description: event.description,
      language: event.language,
      slug: event.slug,
      date: event.created_at,
      author: event.author || null,
      authordiv: event.authordiv || null,
      photographer: event.photographer || null,
      photographerdiv: event.photographerdiv || null,
      interviewees: event.interviewees || null,
      intervieweesdiv: event.intervieweesdiv || null,
      imagetitle: event.imagetitle || null,
    };
  }
}
