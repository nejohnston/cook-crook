import React from 'react';

import ShareStepper from './ShareStepper';
import ShareCard from './ShareCard';
import './styles.css';

const Share = () => (
  <div className="shareContainer">
    <div className="shareComponentLeft">
      <ShareCard />
    </div>
    <div className="shareComponentRight">
      <ShareStepper />
    </div>
  </div>
);

export default Share;
