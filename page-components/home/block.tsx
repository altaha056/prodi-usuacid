/* eslint-disable react/jsx-no-target-blank */
import BlockModel from '@/models/block';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface BlockProps {
  contents: BlockModel[];
}
const BlockItem: React.FC<BlockModel> = ({
  title,
  description,
  iconImage,
  link,
  isOpenNewTab,
}) => (
  <div className="col-md-2 col-6 d-flex align-self-stretch">
    <div className="media block-6 services d-block" >
      <a href={link} target={isOpenNewTab === 'YA' ? '_blank' : ''}>
        <div className="icon d-flex justify-content-center align-items-center">
          <img src={iconImage} alt="icon block" style={{ width: '65%' }} />
        </div>
        <div className="media-body p-2 mt-3">
          <h3 className="heading">{title}</h3>
          <p style={{ color: 'black' }}>{description}</p>
        </div>
      </a>
    </div>
  </div>
);

const Block: React.FC<BlockProps> = ({ contents }) => (
  <section className="ftco-services">
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <div className="container">
        <div className="row">
          {contents.map((item) => (
            <BlockItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </ScrollAnimation>
  </section>
);

export default Block;
