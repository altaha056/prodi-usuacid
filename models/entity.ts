export default interface EntityModel {
  id: string;
  content: string;
  link: string;
  category: 'FAKULTAS' | 'PENDUKUNG';
  selected: boolean;
  imageUrl: string;
}

export class EntityMaker {
  static create(event: Record<string, any>): EntityModel {
    return {
      id: event.id,
      content: event.content,
      link: event.link,
      category: event.category,
      selected: event.selected,
      imageUrl: event.image,
    };
  }
}
