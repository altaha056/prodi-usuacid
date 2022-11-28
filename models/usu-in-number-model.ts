export default interface UsuInNumberModel {
  lectureAmount: number;
  facultyAmount: number;
  majorAmount: number;

  guruBesarAmount: number;
  stafPengajarAmount: number;
  asistenAhliAmount: number;
  lektorAmount: number;
  lektorKepalaAmount: number;
  sarjanaAmount: number;
  diplomaAmount: number;
  profesiAmount: number;
  spesialisAmount: number;
  pascasarjanaAmount: number;
  allSudentAmount: number;
  hkiAmount: number;
}

export class UsuInNumberMaker {
  static create(event: Record<string, any>): UsuInNumberModel {
    return {
      lectureAmount: event.lecture_amount,
      facultyAmount: event.faculty_amount,
      majorAmount: event.major_amount,

      guruBesarAmount: event.guru_besar_amount,
      stafPengajarAmount: event.staf_pengajar_amount,
      asistenAhliAmount: event.asisten_ahli_amount,
      lektorAmount: event.lektor_amount,
      lektorKepalaAmount: event.lektor_kepala_amount,
      sarjanaAmount: event.sarjana_amount,
      diplomaAmount: event.diploma_amount,
      profesiAmount: event.profesi_amount,
      spesialisAmount: event.spesialis_amount,
      pascasarjanaAmount: event.pascasarjana_amount,
      allSudentAmount: event.all_sudent_amount,
      hkiAmount: event.hki_amount,
    };
  }
}
