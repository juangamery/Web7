import React from 'react';
export const ScanBarcode = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M16 2h4v2h-4zm4 2h2v4h-2zm0 12h2v4h-2zm-4 4h4v2h-4zM4 20h4v2H4zm-2-4h2v4H2zM2 4h2v4H2zm2-2h4v2H4zm3 6h2v8H7zm4 0h2v8h-2zm5 0h2v8h-2z" fillRule="evenodd" /></svg>
);
