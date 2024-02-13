# nikolaikocev

Personal Website. Frontend and Backend:

_Let's start with the frontend:_

1. npm init vite@latest . (creates project in same folder)
2. npm install bootstrap react react-bootstrap react-dom react-icons react-router-dom sass

To run: cd nikolaikocev/frontend/:

```
npm run dev
```

OPTIONAL: X. npm install reactstrap (https://reactstrap.github.io/?path=/story/home-installation--page) X. npm install mdb-ui-kit (https://mdbootstrap.com/docs/standard/getting-started/installation/)

_Also, public has been moved to root folder (frontend/public/)._

---

# Customize:

### Cleanup and adding basic structure:

Delete everything in src/, except:
App.jsx & main.jsx

---

Create folders in src/ :

```
mkdir Components Pages scss
```

The styles.scss file:

```
// https://getbootstrap.com/docs/5.3/getting-started/vite/
// https://vitejs.dev/guide/features.html#css-pre-processors

// 1. Override bootstrap variables
$body-bg: #e4b15f; // Set your desired background color

// 2. Import bootstrap
@import '../../node_modules/bootstrap/scss/bootstrap';


// Then add additional custom code here:

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap');

// Import your own SCSS files
@import './sticky-footer.scss';
@import '../Components/Accordion/Accordion.scss';

// Additional global styles

// * {
//   box-sizing: border-box;
// }

// #root {
//   font-family: 'Quicksand', sans-serif;

//   color: #b4b4b8;
//   background: radial-gradient(#b4b4b8, #f2e0c4);
// }
```

import './scss/styles.scss';

touch sticky-footer.scss

```
#root {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#root main {
  flex: 1 0 auto; /* This tells the browser to make the main content grow and shrink as needed, but not to shrink less than its base size */
}
#root footer {
  flex-shrink: 0; /* This tells the browser that the footer should not shrink if there is not enough space */
}
```
