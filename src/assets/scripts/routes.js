import React from 'react';
import { Route } from 'react-router-dom';

import { spring, AnimatedSwitch } from 'react-router-transition';

import Home from '../../pages/Common/Home';

function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

export default () => (
    <AnimatedSwitch
        atEnter={{ offset: 3, opacity: 0 }}
        atLeave={{ offset: 3, opacity: 1 }}
        atActive={{ offset: 0, opacity: bounce(1) }}
        mapStyles={(styles) => ({
        transform: `translateX(${styles.offset}%)`,
        opacity: styles.opacity
        })}
        className="route-wrapper"
    >
        <Route path="/" exact component={Home} />
    </AnimatedSwitch>
);