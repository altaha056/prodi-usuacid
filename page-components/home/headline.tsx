import HeadlineModel from '@/models/headline';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
    contents: HeadlineModel[];
}

const CarouselRenderItem: React.FC<HeadlineModel> = ({
                                                         imageHeight,
                                                         title,
                                                         description,
                                                         link,
                                                         button = false,
                                                         buttonText = 'BUTTON',
                                                         imageUrl,
                                                     }) => (
    <div>
        <div className="content-background">
            <img
              src={imageUrl}
              style={{ objectFit: 'cover'}}
              alt="1"
            />
        </div>

        <div className="carousel-caption-custom">
            <div className="content">
                <div>
                    <h1 className="section-textheadline__title">{title}</h1>
                    {/* <h2 className='section-textheadline__isi'>{description}</h2> */}
                    {button ? (
                        <p>
                            <a
                              href={link}
                              className="btn btn-white btn-outline-white"
                            >
                                {buttonText}
                            </a>
                        </p>
                    ) : null}
                </div>
            </div>
        </div>

    </div>
);
const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
};
const HeadLine: React.FC<Props> = ({ contents }) => {
    // eslint-disable-next-line no-underscore-dangle
    const _onReady = (event: any) => {
        event.target.pauseVideo();
    };
    return (
        <section className="section-headline">
             <Carousel
               showArrows={false}
               autoPlay
               showStatus={false}
               showThumbs={false}
               stopOnHover={false}
               infiniteLoop
               interval={5000}
               dynamicHeight={false}
               renderIndicator={(handleClick, isSelected) => (
        <div
          aria-hidden="true"
          onClick={handleClick}
          className={`dot-carossel ${isSelected ? 'active' : ''}`}
        >
          <span />
        </div>
      )}
             >
      {contents.map((item) => (
        <CarouselRenderItem key={item.id} {...item} />
      ))}
             </Carousel>
        </section>
    )};

export default HeadLine;
