import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '4',
      title: 'Hari Tst Nasional',
      full_day: true,
      type: 'Hari Besar Nasional',
      date: '2022-10-22',
      time_start: '2022-10-22T00:00:00',
      time_end: '2022-10-22T00:00:00',
    },
    {
      id: '1',
      title: 'Hari Batik Nasional',
      full_day: true,
      type: 'Hari Besar Nasional',
      date: '2022-10-13',
      time_start: '2022-10-22T00:00:00',
      time_end: '2022-10-22T00:00:00',
    },
    {
      id: '2',
      title: 'Pengukuhan Guru Besar Fakultas Pertanian',
      full_day: false,
      type: 'Akademik dan Workshop',
      date: '2022-10-13',
      time_start: '2022-10-22T09:00:00',
      time_end: '2022-10-22T14:00:00',
    },
    {
      id: '3',
      title: 'Kuliah Umum Kecerdasan Buatan dan Sains Data (online)',
      full_day: false,
      type: 'Akademik dan Workshop',
      date: '2022-10-13',
      time_start: '2022-10-22T10:00:00',
      time_end: '2022-10-22T16:00:00',
    },
  ]);
};
