import React from 'react';
export const Square = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M2 4h2v16H2zm2 16h16v2H4zM20 4h2v16h-2zM4 2h16v2H4z" fillRule="evenodd" /></svg>
);
