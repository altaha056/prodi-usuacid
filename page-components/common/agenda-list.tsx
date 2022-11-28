/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Link from 'next/link';
import { title } from 'node:process';
import ScrollAnimation from 'react-animate-on-scroll';
import dateFormat from '@/config/dateformat';
import Popup from 'reactjs-popup';

interface Props {
  id: string;
  image: string;
  title: string;
  agendaId: string;
  date: string | null;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({ image, date, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="section-option__portal">
      <p className="section-option__portal__title">
        {title}
      </p>
      <p className="section-option__portal__date">{date}</p>
      <hr className="section-option__garisabuportal" />
    </div>
  );
};

export default ArticleList;