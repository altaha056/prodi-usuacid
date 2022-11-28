export default interface FooterContentModel {
  id: string;
  content: string;
  link: string;
  image: string;
}

export class FooterContentMaker {
  static create(event: Record<string, any>): FooterContentModel {
    return {
      id: event.id,
      content: event.content,
      link: event.link,
      image: event.image || null,
    };
  }
}
