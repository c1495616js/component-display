import React from 'react';

export default function Item({ children, desc }) {
  return (
    <div className="item">
      {children}
      <div className="item__desc">{desc || 'No Description'}</div>
    </div>
  );
}
