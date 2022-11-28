export default interface IdentityModel {
  id: string;
  title: string;
  shortDescription: string | null;
  description: string;
  image: string;
  link: string;
  language: string;
  slug: string;
}

export class IdentityMaker {
  static create(event: Record<string, any>): IdentityModel {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      shortDescription: event.shortDescription || null,
      image: event.image,
      link: event.link,
      language: event.language,
      slug: event.slug,
    };
  }
}
