import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      title: 'PENERIMAAN MAHASISWa',
      description:
        'Portal penerimaan mahasiswa S-1 Mandiri, D-3, Pascasarjana, PPDS, dan Ekstensi.',
      icon_image: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    },
    {
      id: '2',
      title: 'PROGRAM STUDI',
      description: 'Temukan pilihan program studi yang tepat untuk Anda.',
      icon_image:
        'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png',
    },
    {
      id: '3',
      title: 'AKREDITASI',
      description: 'Jaminan pendidikan berkualitas (Akreditasi BAN-PT)',
      icon_image: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    },
    {
      id: '4',
      title: 'KALENDER AKADEMIK',
      description: 'Jadwal kegiatan akademik pada tahun aktif',
      icon_image: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    },
  ]);
};
