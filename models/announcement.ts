export default interface AnnouncementModel {
  id: string;
  title: string;
  shortDescription: string | null;
  description: string;
  image: string;
  author: string;
  date: string | null;
  language: string;
  slug: string;
  authordiv: string | null;
  photographer: string | null;
  photographerdiv: string | null;
  interviewees: string | null;
  intervieweesdiv: string | null;
  imagetitle: string | null;
}

export class AnnouncementMaker {
  static create(event: Record<string, any>): AnnouncementModel {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      shortDescription: event.shortDescription || null,
      image: event.image,
      author: event.author,
      date: event.createdAt || null,
      language: event.language,
      slug: event.slug,
      authordiv: event.authordiv || null,
      photographer: event.photographer || null,
      photographerdiv: event.photographerdiv || null,
      interviewees: event.interviewees || null,
      intervieweesdiv: event.intervieweesdiv || null,
      imagetitle: event.imagetitle || null,
    };
  }
}
