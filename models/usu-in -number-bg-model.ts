export default interface UsuInNumberBackroundModel {
  bgImage: string | null;
}

export class UsuInNumberBgMaker {
  static create(event: Record<string, any>): UsuInNumberBackroundModel {
    return {
      bgImage: event['bg-image'] || null,
    };
  }
}
