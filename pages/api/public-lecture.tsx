import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: '1',
      lecturer_name: 'Prof. Dr. Garreth Smith',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      link: '#',
      photo: 'images/person_1.jpg',
      profession: 'Pakar Marketing',
    },
    {
      id: '4',
      lecturer_name: 'Dr. John McClane',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      link: '#',
      photo: 'images/person_3.jpg',
      profession: 'Pakar Antiteroris',
    },
    {
      id: '2',
      lecturer_name: 'Prof. Dr.Eng. Juan De Papel',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      link: '#',
      photo: 'images/person_1.jpg',
      profession: 'Pakar Keuangan',
    },
    {
      id: '3',
      lecturer_name: 'Prof. Dr.Eng. Juan De Papel',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      link: '#',
      photo: 'images/person_1.jpg',
      profession: 'Pakar Keuangan',
    },
    {
      id: '5',
      lecturer_name: 'Prof. Dr.Eng. Juan De Papel',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      link: '#',
      photo: 'images/person_1.jpg',
      profession: 'Pakar Keuangan',
    },
  ]);
};
