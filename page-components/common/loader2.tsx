import ContentLoader from 'react-content-loader';
import React from 'react';

export const ArticleLoader: React.FC = () => (
  <ContentLoader width="100%">
    <rect x="0" y="0" rx="5" ry="0" width="0" height="0" />
  </ContentLoader>
);
