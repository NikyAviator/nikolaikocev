import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import UseOutsideClick from '.';

export default function UseOnClickOutsideTest() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  UseOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Some random content.</h1>
          <p>Click outside to close.</p>
        </div>
      ) : (
        <Button onClick={() => setShowContent(true)}>Show content</Button>
      )}
    </div>
  );
}
