export default interface ResearchModel {
  id: string;
  title: string;
  description?: string;
  shortDescription: string;
  image: string;
  language: string;
  slug: string;
  date: string;
  author: string;
  authordiv: string | null;
  photographer: string | null;
  photographerdiv: string | null;
  interviewees: string | null;
  intervieweesdiv: string | null;
  imagetitle: string | null;
}

export class ResearchMaker {
  static create(event: Record<string, any>): ResearchModel {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      shortDescription: event.short_description,
      image: event.image,
      language: event.language,
      slug: event.slug,
      date: event.created_at,
      author: event.author,
      authordiv: event.authordiv || null,
      photographer: event.photographer || null,
      photographerdiv: event.photographerdiv || null,
      interviewees: event.interviewees || null,
      intervieweesdiv: event.intervieweesdiv || null,
      imagetitle: event.imagetitle || null,
    };
  }
}
