import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      title: 'Vaksinasi Tenaga Pendidik USU',
      description:
        'USU turut mendukung langkah pemerintah dalam mengendalikan penyebaran virus Covid-19. USU turut mendukung langkah pemerintah dalam mengendalikan penyebaran virus Covid-19.',
      link: '#',
      button_visible: true,
      button_text: 'Bagaimana Vaksin Bekerja?',
      image:
        'https://www.ciputrahospital.com/wp-content/uploads/2021/01/shutterstock_546477442resizeee.jpg',
    },
    {
      id: '2',
      title: 'Sustainable Plantation Landscape',
      description:
        'Raising awareness among managers of agricultural plantations in Southeast Asia',
      link: '#',
      button_visible: true,
      button_text: 'View works',
      image:
        'https://www.rubiconcentre.ie/wp-content/uploads/2018/12/organic-gardening-good-for-the-environment.jpg',
    },
  ]);
};
