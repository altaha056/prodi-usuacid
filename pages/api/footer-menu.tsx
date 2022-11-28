import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      title: 'Beranda',
      link: '#',
    },
    {
      id: '2',
      title: 'Visi Misi',
      link: '#',
    },
    {
      id: '3',
      title: 'Renstra',
      link: '#',
    },
    {
      id: '4',
      title: 'Landasan Hukum',
      link: '#',
    },
    {
      id: '5',
      title: 'LAKIP',
      link: '#',
    },
    {
      id: '6',
      title: 'Struktur Organisasi',
      link: '#',
    },
    {
      id: '7',
      title: 'Majelis Wali Amanat',
      link: '#',
    },
    {
      id: '8',
      title: 'Dewan Guru Besar',
      link: '#',
    },
    {
      id: '9',
      title: 'Senat Akademi',
      link: '#',
    },
    {
      id: '10',
      title: 'Pimpinan',
      link: '#',
    },
  ]);
};
