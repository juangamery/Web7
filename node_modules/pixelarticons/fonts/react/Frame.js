import React from 'react';
export const Frame = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M5 2h2v20H5zm12 0h2v20h-2z" fillRule="evenodd" />,
<path d="M2 5h20v2H2zm0 12h20v2H2z" fillRule="evenodd" />,
<path d="M5 2h2v20H5zm12 0h2v11h-2z" fillRule="evenodd" />,
<path d="M2 5h20v2H2zm0 12h11v2H2zm13 0h6v2h-6z" fillRule="evenodd" />,
<path d="M17 15h2v6h-2z" fillRule="evenodd" />,
<path d="M0 0h24v24H0z" fillRule="evenodd" /></svg>
);
