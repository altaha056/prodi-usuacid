export default interface InformastionModel {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText?: string;
  button?: boolean;
}

export class InformationMaker {
  static create(event: Record<string, any>): InformastionModel {
    return {
      id: event.id,
      title: event.title,
      description: event.content,
      image: event.image,
      link: event.link,
      button: event.button_visible,
      buttonText: event.button_text,
    };
  }
}
