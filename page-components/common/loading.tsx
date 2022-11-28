import Head from 'next/head';
import React from 'react';

const LoadingSSO: React.FC = () => (
  <>
    <Head>
      <title>Universitas Sumatera Utara</title>
      <link rel="icon" href="/usu_icon.png" />
    </Head>
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="loading-container">
        <img
          className="loading-image"
          src="/usu.png"
          alt="logo"
          style={{ width: 70 }}
        />
        <div>Please wait...</div>
      </div>
    </div>
  </>
);

export default LoadingSSO;
