export default interface AgendaModel {
  id: string;
  title: string;
  agendaId: string;
  date: string;
  image: string;
}

export class AgendaMaker {
  static create(event: Record<string, any>): AgendaModel {
    return {
      id: event.id,
      title: event.title,
      image: event.image,
      date: event.start,
      agendaId: event.agenda_id,
    };
  }
}
