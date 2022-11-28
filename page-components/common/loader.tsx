import ContentLoader from 'react-content-loader';
import React from 'react';

export const ArticleLoader: React.FC = () => (
  <ContentLoader width="100%">
    <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
    <rect x="180" y="6" rx="3" ry="3" width="1000" height="24" />
    <rect x="180" y="50" rx="3" ry="3" width="75%" height="14" />
    <rect x="180" y="80" rx="3" ry="3" width="65%" height="14" />
    <rect x="180" y="105" rx="3" ry="3" width="60%" height="14" />
  </ContentLoader>
);
