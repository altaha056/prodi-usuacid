export default interface LeaderModel {
  id: string;
  title: string;
  name: string | null;
  image: string;
  shortDescription: string | null;
  description: string;
  author: string;
  authordiv: string | null;
  photographer: string | null;
  photographerdiv: string | null;
  interviewees: string | null;
  intervieweesdiv: string | null;
  language: string;
  slug: string;
  imagetitle: string | null;
}

export class LeaderMaker {
  static create(event: Record<string, any>): LeaderModel {
    return {
      id: event.id,
      title: event.title,
      name: event.name || null,
      image: event.image,
      shortDescription: event.short_description || null,
      description: event.description,
      author: event.author,
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
