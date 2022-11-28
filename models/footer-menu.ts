export default interface FooterMenuModel {
  id: string;
  title: string;
  slug: string;
}

export class FooterMenuMaker {
  static create(event: Record<string, any>): FooterMenuModel {
    return {
      id: event.id,
      title: event.title,
      slug: event.slug,
    };
  }
}
