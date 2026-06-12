import React from 'react';
export const Sparkle = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M11 1h2v4h-2zm0 22h2v-4h-2zM9 5h2v4H9zm0 14h2v-4H9zm4-14h2v4h-2zm0 14h2v-4h-2zM5 9h4v2H5zm14 0h-4v2h4zM1 11h4v2H1zm22 0h-4v2h4zM5 13h4v2H5zm14 0h-4v2h4z" fillRule="evenodd" /></svg>
);
