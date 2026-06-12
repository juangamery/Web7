import React from 'react';
export const Wall = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM4 8h16v2H4zm0 6h16v2H4zM6 4h2v4H6zm2 12h2v4H8zm6-12h2v4h-2zm2 12h2v4h-2zm-5-6h2v4h-2z" fillRule="evenodd" /></svg>
);
