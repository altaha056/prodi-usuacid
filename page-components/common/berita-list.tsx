import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import { useRouter } from 'next/router';
import dateFormat from '@/config/dateformat';

interface Props {
  id: string;
  title: string;
  image: string;
  description: string;
  slug: string | null;
  date: string | null;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  image,
  title,
  slug,
  date,
  description,
}) => {
  const router = useRouter();
  const { language } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className=" ftc-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-menu__lainnya__video">
                <img src={image} />
              </div>
            </div>
            <div className="col-md-6">
              {/* <ScrollAnimation animateIn="fadeInUp" animateOnce> */}
              {/* </ScrollAnimation> */}
              <div className="section-menu__lainnya__date">
                <p>{dateFormat(date, 'dd mmmm yyyy')}</p>
              </div>
              <div className="section-menu__lainnya__title">
                <p>{title}</p>
              </div>
              <div className="section-menu__lainnya__deskripsi">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleList;