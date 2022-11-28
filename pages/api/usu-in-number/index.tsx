import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      number: 10,
      title: 'Fakultas/Sekolah',
    },
    {
      number: 20,
      title: 'Program Studi',
    },
    {
      number: 3000,
      title: 'Tenaga Pendidik',
    },
  ]);
};
