import React from 'react';
export const Flag = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M4 2h2v20H4z" fillRule="evenodd" />,
<path d="M4 4h16v2H4zm12 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zM4 12h16v2H4z" fillRule="evenodd" /></svg>
);
