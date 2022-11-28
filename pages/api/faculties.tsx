import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      slug: 'fakultas-kedokteran-gigi',
      headlineImage: '/images/fakultas-prodi/headline-fkg.jpg',
      backgroundImage: '/images/fakultas-prodi/background-fkg.png',
      visiImage: '/images/fakultas-prodi/background-visi-fkg.jpg',
      title: 'Fakutas Kedokteran Gigi',
      subtitle:
        'Fakultas Kedokteran Gigi USU berupaya untuk  menghasilkan lulusan akademik, Profesi, Spesialis, Magister dan Doktor Ilmu Kedokteran Gigi yang berkualitas dan dapat berdaya saing global',
      pageUrl: 'fkg.usu.ac.id',
      images: [
        '/images/fakultas-prodi/images-fkg-1.jpg',
        '/images/fakultas-prodi/images-fkg-2.jpg',
        '/images/fakultas-prodi/images-fkg-3.jpg',
      ],
      majors: [
        { title: 'Program Sarjana', subtitle: 'S1 Pendidikan Dokter' },
        { title: 'Program Profesi', subtitle: 'Bedah Syaraf' },
        { title: 'Program Profesi', subtitle: 'Ilmu Bedah' },
        { title: 'Program Profesi', subtitle: 'Ilmu Kedokteran Anastesi' },
        { title: 'Program Profesi', subtitle: 'Ilmu Kedokteran Forensik' },
        { title: 'Program Profesi', subtitle: 'Ilmu Orthopedi/Traumatologi' },
        { title: 'Program Profesi', subtitle: 'Ilmu Patologi Anatomi' },
        { title: 'Program Profesi', subtitle: 'Ilmu Patologi Klinik' },
        {
          title: 'Program Profesi',
          subtitle: 'Ilmu Penyakit Kulit dan kelamin',
        },
      ],
      visi: 'Menjadi Institusi yang menghasilkan lulusan Akademik, Profesi, Spesialis, Magister dan Doktor Ilmu Kedokteran Gigi yang berkualitas dengan unggulan dalam bidang natural resource, technology, dan art yang dapat berdaya saing global.',
      misiPendidikan:
        'Menjadi Institusi yang menghasilkan lulusan Akademik, Profesi, Spesialis, Magister dan Doktor Ilmu Kedokteran Gigi yang berkualitas dengan unggulan dalam bidang natural resource, technology, dan art yang dapat berdaya saing global.',
      misiPenelitian:
        'Menyelenggarakan penelitian yang berorientasi pada pengembangan IPTEK dengan unggulan dalam bidang natural resource, technology, dan art untuk dapat menyelesaikan masalah kesehatan gigi dan mulut berdasarkan evidence-based dentistry sebagai landasan utama dan mampu bersaing global',
      misiPengabdian:
        'Menyelenggarakan pengabdian dan pelayanan kepada masyarakat dengan memanfaatkan kemajuan IPTEK secara tepat untuk meningkatkan kesehatan gigi dan mulut',
      misiBintang:
        'Membentuk insan akademik Fakultas Kedokteran Gigi USU yang berkarakter BINTANG (Bertaqwa kepada Tuhan Yang Maha Esa dalam bingkai kebhinekaan, Inovatif yang berintegritas, Tangguh dan Arif)',
      address:
        'Jalan Alumni No. 2, Kampus USU Medan, Sumatera Utara Indonesia 20155',
      phoneNumber: '061-8216131',
      email: 'fkg@usu.ac.id',
      youtube: 'youtube.com',
      instagram: 'instagram.com',
      facebook: 'facebook.com',
    },
  ]);
};
