import React from 'react';
import { Route } from 'react-router-dom';

import { spring, AnimatedSwitch } from 'react-router-transition';

import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import Commission from '../../pages/Commission';
import Contact from '../../pages/Contact';

function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

export default () => (
  <>
    {/* <AnimatedSwitch
       atEnter={{ offset: 3, opacity: 0 }}
        atLeave={{ offset: 3, opacity: 1 }}
        atActive={{ offset: 0, opacity: bounce(1) }}
        mapStyles={(styles) => ({
        transform: `translateX(${styles.offset}%)`,
        opacity: styles.opacity
        })}
        className="route-wrapper"
    >  */}
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Portfolio} />
        <Route path="/commission" exact component={Commission} />
        <Route path="/contact" exact component={Contact} />
    {/* </AnimatedSwitch> */}
    </>
);