import { useState } from 'react';

export default function UseClickOutside() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div>
          <h1>Some random content.</h1>
          <p>Click outside to close.</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
}
