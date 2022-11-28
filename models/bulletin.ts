
export default interface BulletinModel {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  author: string;
  authordiv: string;
  photographer: string;
  photographerdiv: string;
  shortDescription: string;
  description: string;
  image: string;
  selected: boolean;
  language: string;
  slug: string;
  imagetitle: string;
  date: string | null;
}

export class BulletinMaker {
  static create(event: Record<string, any>): BulletinModel {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      category: event.category,
      categoryId: event.category_id,
      author: event.author,
      authordiv: event.authordiv,
      photographer: event.photographer,
      photographerdiv: event.photographerdiv,
      shortDescription: event.short_description,
      image: event.image,
      selected: event.selected,
      language: event.language,
      slug: event.slug,
      imagetitle: event.imagetitle,
      date: event.createdAt || null,
    };
  }
}
