import React from 'react';
export const Box = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M14 4h4v2h-4zm-4-2h4v2h-4zM6 8h4v2H6zm0 10h4v2H6zm4-8h4v2h-4zm0 10h4v2h-4zm4-12h4v2h-4zm0 10h4v2h-4zM6 4h4v2H6zM2 6h4v2H2zm0 10h4v2H2zM18 6h4v2h-4zm0 10h4v2h-4z" fillRule="evenodd" />,
<path d="M2 6h2v12H2zm18 0h2v12h-2zm-8 6h2v8h-2z" fillRule="evenodd" /></svg>
);
