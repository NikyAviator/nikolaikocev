import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseFetchHook from '../Components/use-fetch/test';
import UseClickOutside from '../Components/use-outside-click/test';
import UseWindowResizeTest from '../Components/use-window-resize/test';

const CustomHooksPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Custom Hooks</h1>
          <p>
            Custom hooks are reusable pieces of logic that can be shared between
            components. They are a way to extract component logic into a
            reusable function. Custom hooks are a powerful feature in React that
            allow you to create your own hooks and share them across multiple
            components.
          </p>
          <p>
            Custom hooks are a way to share logic between components without
            having to use higher-order components or render props. They are a
            way to encapsulate logic that can be reused across multiple
            components. Custom hooks are a great way to keep your code DRY and
            make it easier to maintain and refactor.
          </p>
          <p>
            Custom hooks are a powerful feature in React that allow you to
            create your own hooks and share them across multiple components.
            They are a way to extract component logic into a reusable function.
            Custom hooks are a great way to keep your code DRY and make it
            easier to maintain and refactor.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>1st custom hook: Fetch :</h2>
          <p>
            In this example, we will create a custom hook that fetches data from
            an API. We will use the custom hook to fetch data from the
            <a href='https://dummyjson.com/products'>Dummy JSON API</a>.
          </p>
          <p>
            The custom hook will take a URL as an argument and return an object
            with three properties: data, pending, and error. The data property
            will contain the fetched data, the pending property will indicate
            whether the request is pending, and the error property will contain
            any error that occurred during the request.
          </p>
          <UseFetchHook />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h2>2nd custom hook: Click outside:</h2>
          <p>
            In this example, we will create a custom hook that allows us to
            detect clicks outside of a specified element. We will use the custom
            hook to show and hide a piece of content when the user clicks
            outside of it.
          </p>
          <UseClickOutside />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h2>3rd custom hook: Use Window Resize:</h2>
          <p>
            In this example, we will create a custom hook that allows us to
            detect window resize events. We will use the custom hook to display
            the width and height of the window as it is resized.
          </p>
          <UseWindowResizeTest />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomHooksPage;
