import React from 'react';
export const SquareDashedCursor = props => (
  <svg viewBox="0 0 20 20" width="24px" height="24px" {...props} className={`pixelart-icons-font ${props.className ? props.className : ''}`}><path d="M12 10h2v12h-2zm2 0h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm-6 4h2v2h-2zm2-2h6v2h-6zM2 16h2v4H2zm2 4h2v2H4zm4 0h2v2H8zM2 10h2v4H2zm0-6h2v4H2zm2-2h2v2H4zm4 0h4v2H8zm6 0h4v2h-4zm6 2h2v4h-2zm0 6h2v2h-2z" fillRule="evenodd" /></svg>
);
