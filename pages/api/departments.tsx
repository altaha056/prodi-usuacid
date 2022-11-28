import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      image: '/images/kedokteran/pekarangan_fk.jpg',
      slug: 'ilmu-komputer',
      title: 'Ilmu Komputer',
      subtitle:
        'Lulusan Program Studi Ilmu Komputer dapat bekerja diberbagai bidang yang berkaitan dengan ranah digital dan komputerisasi.',
      sertifikat: '/images/kedokteran/akreditasi_fk_bedah.jpg',
      program: 'Profesi',
      biaya_awal: [
        {
          title: 'Dana Kelengkapan Akademik (DKA)',
          price: 'Rp7.000.000,-',
        },
        {
          title: 'Sumbangan Spesialis',
          price: 'Rp25.000.000,-',
        },
      ],
      biaya_spp: 'Rp15.000.000,-',
      keunggulan:
        'Program studi ini berstatus akreditasi A oleh BAN-PT. Didukung oleh Staf Pengajar yang kompeten dari dalam dan luar negeri, sehingga menghasilkan presentasi kelulusan tepat waktu yang tinggi. Mahasisiwa disuguhkan fasilitas perkuliahan dan laboratorium yang memadai. Kolaborasi dosen dan mahasiswa dalam riset grup mendukung kemampuan mahasiswa agar dapat diterapkan di dalam berbagai bidang.',
      peluang_kerja:
        'Lulusan Program Studi Ilmu Komputer dapat bekerja diberbagai bidang yang berkaitan dengan ranah digital dan komputerisasi. Diantaranya sebagai programmer, database administrator, database analyst, software engineer, game developer, IT consultant, IT project manager, information security specialists, web developer, network engineer, serta technopreuner di berbagai perusahaan seperti IT company, perbankan, perkebunan, advertising, manufaktur, pertambangan, pendidikan dan lain sebagainya.',
      url: '#',
    },
  ]);
};
