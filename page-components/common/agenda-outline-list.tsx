/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

interface Props {
  language?: string | string[];
  ga?: string;
  textresearch?: string | null;
  textlecture?: string | null;
  textdedication?: string | null;
  textagenda?: string | null;
  data: any | null;
}

const ArticleOutlineAgendaList: React.FC<Props> = ({ data }) => {
  return <p>{data.text_agenda}</p>;
};
export default ArticleOutlineAgendaList;
