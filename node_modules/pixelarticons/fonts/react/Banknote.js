import React from 'react';
export const Banknote = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M3 5h18v2H3zM1 7h2v10H1zm2 10h18v2H3zM21 7h2v10h-2zM11 9h2v2h-2zm-2 2h2v2H9zm2 2h2v2h-2zm2-2h2v2h-2zm4 0h2v2h-2zM5 11h2v2H5z" fillRule="evenodd" /></svg>
);
