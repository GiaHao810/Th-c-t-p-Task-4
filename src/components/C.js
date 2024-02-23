import React from 'react';

function C({ selectedLink }) {
  return (
    <div>
      <h2>Embedded Content</h2>
      {selectedLink && (
        <iframe
          src={selectedLink}
          title="Embedded Content"
          width="600"
          height="400"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default C;
