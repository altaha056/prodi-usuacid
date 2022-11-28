export default interface BlockModel {
  id: string;
  title: string;
  description: string;
  iconImage: string;
  language: string;
  link: string;
  isOpenNewTab: string;
}

export class BlockMaker {
  static create(event: Record<string, any>): BlockModel {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      language: event.language,
      iconImage: event.icon_image,
      link: event.link,
      isOpenNewTab: event.is_open_new_tab,
    };
  }
}
