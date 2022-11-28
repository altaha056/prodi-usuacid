export default interface FrontTextModel {
  id: string;
  language: string;
  ga: string;
  textresearch: string;
  textlecture: string;
  textdedication: string;
  textagenda: string;
  selected: boolean;
}

export class FrontTextMaker {
  static create(event: Record<string, any>): FrontTextModel {
    return {
      id: event.id,
      language: event.language,
      ga: event.ga,
      textresearch: event.textresearch,
      textlecture: event.textlecture,
      textdedication: event.textdedication,
      textagenda: event.textagenda,
      selected: event.selected,
    };
  }
}
