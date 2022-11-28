import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      title: 'Active Learning',
      image: 'images/staff-1.jpg',
      location: 'SMA Negeri 1 Dolok Batu Nanggar',
      shortDescription:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
      description:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
    },
    {
      id: '2',
      title: 'Sosialisasi Hand Sanitizer',
      image: 'images/staff-2.jpg',
      location: 'Pasar Baru',
      shortDescription:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
      description:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
    },
    {
      id: '3',
      title: 'Bisnis Batik Mangrove',
      image: 'images/staff-4.jpg',
      location: 'Percut Sei. Tuan',
      shortDescription:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
      description:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
    },
    {
      id: '4',
      title: 'Multi-Nutrient Block',
      image: 'images/staff-3.jpg',
      location: 'Hamparan Perak',
      shortDescription:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
      description:
        'I am an ambitious workaholic, but apart from that, pretty simple person.',
    },
  ]);
};
