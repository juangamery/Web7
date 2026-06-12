import React from 'react';
export const CircleSquare = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M11 9h9v2h-9zm0 11h9v2h-9zm-2-9h2v9H9zm11 0h2v9h-2zM6 2h7v2H6z" fillRule="evenodd" />,
<path d="M6 15h7v2H6zm7-11h2v2h-2zm0 9h2v2h-2zM4 4h2v2H4zm0 9h2v2H4zm11-7h2v7h-2zM2 6h2v7H2z" fillRule="evenodd" /></svg>
);
