import '../../scss/styles.scss';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomColorUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomHexColor = () => {
    // # + 6 random numbers or letters
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtil(hex.length)];
    }
    console.log(hexColor);

    setColor(hexColor);
  };
  const handleRandomRgbColor = () => {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);
    console.log(r, g, b);

    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <>
      <div
        style={{
          width: 'auto',
          height: '100vh',
          backgroundColor: color,
        }}
      >
        <Container className='d-flex justify-content-center align-items-center'>
          <Row md={6}>
            <Col>
              <Button
                onClick={() => setTypeOfColor('hex')}
                type='button'
                class='btn btn-secondary'
              >
                Choose Hex Color
              </Button>
              <Button
                onClick={() => setTypeOfColor('rgb')}
                type='button'
                class='btn btn-secondary'
              >
                Choose Rgb Color
              </Button>
              <Button
                onClick={
                  typeOfColor === 'hex'
                    ? handleRandomHexColor
                    : handleRandomRgbColor
                }
                type='button'
                class='btn btn-secondary'
              >
                Generate Random Color
              </Button>
            </Col>
            <Col md={6}>
              <h1>{color}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RandomColor;
