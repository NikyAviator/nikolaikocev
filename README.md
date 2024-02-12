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

The main.scss file:

```
// THEORY:
/*Om vi override bootstrap variables:

1. //Bootstrap variable overrides (måste komma innan import bootstrap!):
$body-bg: black; (tex)
$body-color: white; (tex)

2. //Import Bootastrap
@import "../../node_modules/bootstrap/scss/bootstrap";

3. //Import our own scss (could be several files)
@import "./sticky-footer";
@import "./body";
*/

// IMPLEMENTATION:
// 1. Override bootstrap variables

// 2.  Bootstrap css
@import '../../node_modules/bootstrap/scss/bootstrap';

//3. Our own css
@import './sticky-footer.scss';
@import './background.scss';
```

Do not forget to import the file in App.jsx

```
import './scss/main.scss';
```

---

### Sticky footer:

```
touch sticky-footer.scss
```

The file:

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

---
