export default interface DosenModel {
  id: string;
  slug: string;
  language: string;
  userId: string;
  profile: Profile;
  image: string;
  knowledgeField: string[];
  description: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  blog: string;
  researchGate: string;
  googleScholar: string;
  sinta: string;
  scopus: string;
  orcidId: string;
  achievement: Achievement[];
  video: Video[];
  publish: Publish[];
  teaching: Teaching[];
  research: Research[];
  devotion: Devotion[];
  hki: Hki[];
  createdBy: string;
  updatedBy: string;
  createdAt: number;
  updatedAt: number;
  selected: boolean;
  deleted: boolean;
}

export interface Hki {
  year: string;
  inventor: string[];
  id: string;
  title: string;
  type: string;
}
export interface Devotion {
  year: string;
  id: string;
  title: string;
}
export interface Research {
  year: string;
  id: string;
  title: string;
}
export interface Achievement {
  id: string;
  userId: string;
  slug: string;
  language: string;
  title: string;
  image: string;
  date: Date;
  place: string;
  short_description: string;
  description: string;
  createdBy: string;
  updatedBy: string;
  createdAt: number;
  updatedAt: number;
  deleted: boolean;
}

export interface Video {
  id: string;
  video_link: string;
  language: string;
  title: string;
  slug: string;
  userId: string;
  profile: null;
  date: Date;
  createdBy: string;
  updatedBy: string;
  createdAt: number;
  updatedAt: number;
  deleted: boolean;
}

export interface Profile {
  nip: string;
  workName: string;
  nidn: string;
  sisterUuid: string;
  name: string;
  emailUsu: string;
}

export interface Publish {
  id: string;
  userId: string;
  profile: null;
  publicationId: string;
  publication: Publication;
  link: string;
  createdBy: string;
  updatedBy: string;
  createdAt: number;
  updatedAt: number;
  deleted: boolean;
}

export interface Publication {
  year: string;
  id: string;
  title: string;
  type: string;
}

export interface Teaching {
  subject: string;
  semester: string;
  major_name: string;
  class: string;
}

export class DosenMaker {
  static create(event: Record<string, any>): DosenModel {
    return {
      id: event.id,
      slug: event.slug,
      language: event.language,
      userId: event.user_id,
      profile: event.profile,
      image: event.image,
      knowledgeField: event.knowledge_field,
      description: event.description,
      instagram: event.instagram,
      facebook: event.facebook,
      linkedin: event.linkedin,
      blog: event.blog,
      researchGate: event.research_gate,
      googleScholar: event.google_scholar,
      sinta: event.sinta,
      scopus: event.scopus,
      orcidId: event.orcid_id,
      achievement: event.achievement,
      video: event.video,
      publish: event.publish,
      research: event.research,
      devotion: event.devotion,
      hki: event.hki,
      teaching: event.teaching,
      createdBy: event.created_by,
      updatedBy: event.updated_by,
      createdAt: event.created_at,
      updatedAt: event.updated_at,
      selected: event.selected,
      deleted: event.deleted,
    };
  }
}
