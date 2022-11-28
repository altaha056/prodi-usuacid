import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      image: 'images/work-1.jpg',
      title:
        'Korelasi Antara Pengetahuan Umum dan Perilaku Masyarakat Terhadap Pandemi COVID-19',
      description:
        'Portal penerimaan mahasiswa S-1 Mandiri, D-3, Pascasarjana, PPDS, dan Ekstensi.',
    },
    {
      id: '2',
      image: 'images/work-2.jpg',
      title: 'Biodiversitas Nekton di Sungai Batangtoru',
      description: 'Temukan pilihan program studi yang tepat untuk Anda.',
    },
    {
      id: '3',
      image: 'images/work-3.jpg',
      title: 'Kearifan Lokal Poda Na Lima',
      description: 'Jaminan pendidikan berkualitas (Akreditasi BAN-PT)',
    },
    {
      id: '4',
      image: 'images/work-4.jpg',
      title: 'Desain Arsitektur Modern',
      description: 'Jadwal kegiatan akademik pada tahun aktif',
    },
  ]);
};
