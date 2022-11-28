import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      title: 'Vaksinasi tahap I Tenaga Pendidik USU',
      agenda_id: '1',
      date: '2020-12-14T07:53:30.991+00:00',
      image: 'images/image_1.jpg',
    },
    {
      id: '2',
      title: 'Webinar kuliah umum Anti Korupsi',
      agenda_id: '2',
      date: '2020-12-14T07:53:30.991+00:00',
      image: 'images/image_2.jpg',
    },
    {
      id: '3',
      title: 'Workshop IBM Big Data',
      agenda_id: '3',
      date: '2020-12-14T07:53:30.991+00:00',
      image: 'images/image_3.jpg',
    },
  ]);
};
