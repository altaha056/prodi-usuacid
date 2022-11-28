export default interface HeadlineModel {
  id: string;
  imageHeight: number;
  title: string;
  description: string;
  link: string;
  buttonText?: string;
  button?: boolean;
  imageUrl: string;
}

export class HeadlineMaker {
  static create(event: Record<string, any>): HeadlineModel {
    return {
      id: event.id,
      imageHeight: event.imageHeight,
      title: event.title,
      description: event.description,
      link: event.link,
      button: event.button_visible,
      buttonText: event.button_text,
      imageUrl: event.image,
    };
  }
}
