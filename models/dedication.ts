export default interface DedicationModel {
  id: string;
  title: string;
  image: string;
  location: string;
  shortDescription: string;
  description?: string;
  author: string;
  date: string;
  authordiv: string | null;
  photographer: string | null;
  photographerdiv: string | null;
  interviewees: string | null;
  intervieweesdiv: string | null;
  language: string;
  slug: string;
  imagetitle: string | null;
}

export class DedicationMaker {
  static create(event: Record<string, any>): DedicationModel {
    return {
      id: event.id,
      title: event.title,
      image: event.image,
      location: event.location,
      shortDescription: event.short_description,
      description: event.description,
      author: event.author,
      date: event.created_at,
      authordiv: event.authordiv || null,
      photographer: event.photographer || null,
      photographerdiv: event.photographerdiv || null,
      interviewees: event.interviewees || null,
      intervieweesdiv: event.intervieweesdiv || null,
      language: event.language,
      slug: event.slug,
      imagetitle: event.imagetitle || null,
    };
  }
}
