export default interface DosenModel {
  slug: string;
  name: string;
  description: string;
  nip: string;
  nidn: string;
  email: string;
  expertise: Array<string>;
  bio: string;
  link: string;
  image: string;
  socialMedia: Record<string, string>;
  researchMedia: Record<string, string>;
  penelitian: Array<Record<string, string>>;
  penelitianUrl: string;
  publikasi: Array<Record<string, string>>;
  publikasiUrl: string;
  pengajaran: Array<Record<string, string>>;
  pengajaranUrl: string;
  pengabdian: Array<Record<string, string>>;
  pengabdianUrl: string;
  paten: Array<Record<string, string>>;
  patenUrl: string;
  penghargaan: Array<Record<string, string>>;
  penghargaanUrl: string;
  videos: Array<string>;
  videoUrl: string;
}

export class DosenMaker {
  static create(event: Record<string, any>): DosenModel {
    return {
      slug: event.slug,
      name: event.name,
      description: event.description,
      nip: event.nip,
      nidn: event.nidn,
      email: event.email,
      expertise: event.expertise,
      bio: event.bio,
      link: event.link,
      image: event.image,
      socialMedia: event.socialMedia,
      researchMedia: event.researchMedia,
      penelitianUrl: event.penelitianUrl,
      penelitian: event.penelitian,
      publikasiUrl: event.publikasiUrl,
      publikasi: event.publikasi,
      pengajaran: event.pengajaran,
      pengajaranUrl: event.pengajaranUrl,
      pengabdian: event.pengabdian,
      pengabdianUrl: event.pengabdianUrl,
      paten: event.paten,
      patenUrl: event.patenUrl,
      penghargaan: event.penghargaan,
      penghargaanUrl: event.penghargaanUrl,
      videos: event.videoss,
      videoUrl: event.videoUrl,
    };
  }
}
