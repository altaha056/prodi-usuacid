import React from 'react';

interface Props {
  show: boolean;
}

const LoadingPage: React.FC<Props> = ({ show }) =>
  show ? (
    <div className="show fullscreen" id="ftco-loader">
      <svg className="circular" width="48px" height="48px">
        <circle
          className="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#eeeeee"
        />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#F96D00"
        />
      </svg>
    </div>
  ) : null;

export default LoadingPage;
