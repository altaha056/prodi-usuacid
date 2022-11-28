/* eslint-disable jsx-a11y/alt-text */
import HeadlineModel from '@/models/headline';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  contents: HeadlineModel[];
}

const HeadLine: React.FC<Props> = ({ contents }) => (
  <section>
    <div>
      <div>
        <img
          src="/images/headline-penelitian.jpg"
          style={{ width: '100%', maxHeight: '100%', marginTop: '-50px' }}
        />
      </div>
    </div>
  </section>
);

export default HeadLine;
