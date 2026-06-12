import React from 'react';
export const Barcode = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M2 4h2v16H2zm4 0h3v16H6zm5 0h3v16h-3zm5 0h2v16h-2zm4 0h2v16h-2z" fillRule="evenodd" /></svg>
);
