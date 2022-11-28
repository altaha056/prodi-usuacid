export default interface StreamingModel {
  id: string;
  name: string;
  photo: string;
  description: string;
  field: string;
  link: string;
  language: string;
  slug: string | null;
  date: string | null;
}

export class StreamingMaker {
  static create(event: Record<string, any>): StreamingModel {
    return {
      id: event.id,
      description: event.description,
      link: event.link,
      photo: event.photo,
      name: event.name,
      field: event.field,
      language: event.language,
      slug: event.slug || null,
      date: event.created_at || null,
    };
  }
}
