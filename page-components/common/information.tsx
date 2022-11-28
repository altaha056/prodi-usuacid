import InformastionModel from '@/models/information';
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface Props {
  contents: InformastionModel[];
}

const Information: React.FC<Props> = ({ contents }) => {
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(10);
  // eslint-disable-next-line no-undef
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);

  const animateInfo = useSpring({
    bottom: show ? 0 : -300,
    display: show ? 'block' : 'none',
  });
  const hideInfo = () => setShow(false);
  const showInfo = () => setShow(true);

  const timerInfo = (until: number) => {
    const date = new Date();
    const now = date.getTime();
    const distance = until - now;
    const seconds = Math.round((distance % (1000 * 60)) / 1000);
    setTimer(seconds);
  };

  useEffect(() => {
    if (contents && contents.length > 0) setTimeout(showInfo, 3000);
  }, [contents]);

  useEffect(() => {
    if (show) {
      const date = new Date();
      const until = date.setSeconds(date.getSeconds() + 11);
      const interval = setInterval(() => timerInfo(until), 1000);
      setIntervalID(interval);
    }
  }, [show]);

  useEffect(() => {
    if (timer <= 0) {
      hideInfo();
      if (intervalID) clearInterval(intervalID);
    }
  }, [timer]);

  return (
    <animated.div className="information-popup p-3" style={animateInfo}>
      <div className="d-flex justify-content-end">
        <div aria-hidden onClick={hideInfo}>
          {`Tutup dalam ${timer}`}
          &nbsp; &nbsp;
          <span className="icon-close close-button" />
        </div>
      </div>
      <div className="row">
        {contents.map((info) => (
          <div className="col-md content" key={info.id}>
            <div className="d-flex">
              <div className="pr-3 image">
                <img
                  src={info.image}
                  alt={info.title}
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="flex-grow-1">
                {/* <strong><a href={info.title}>{info.title}</a></strong> */}
                <a href={info.link}>{info.title}</a>
                <p>{info.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Information;
