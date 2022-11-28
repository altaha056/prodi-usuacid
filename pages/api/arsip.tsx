import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      title: 'HK Haibin China dan USU Pertukaran Mahasiswa',
      type: 'peraturan',
      file: '/images/AA.jpg',
    },
    {
      id: '2',
      title: 'HK Haibin China dan USU Pertukaran Mahasiswa',
      type: 'peraturan',
      file: '/images/AA.jpg',
    },
    {
      id: '3',
      title: 'HK Haibin China dan USU Pertukaran Mahasiswa',
      type: 'peraturan',
      file: '/images/AA.jpg',
    },
    {
      id: '4',
      title: 'HK Haibin China dan USU Pertukaran Mahasiswa',
      type: 'peraturan',
      file: '/images/AA.jpg',
    },
    {
      id: '5',
      title: 'HK Haibin China dan USU Pertukaran Mahasiswa',
      type: 'peraturan',
      file: '/images/AA.jpg',
    },
    {
      id: '6',
      title: 'HK Haibin China dan USU Pertukaran Mahasiswa',
      type: 'peraturan',
      file: '/images/AA.jpg',
    },
    {
      id: '7',
      title: 'HK Haibin China dan USU Pertukaran Mahasiswa',
      type: 'lainnya',
      file: '/images/AA.jpg',
    },
  ]);
};
