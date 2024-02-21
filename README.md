# nikolaikocev

Personal Website. Frontend and Backend:

_Let's start with the frontend:_

## Create the vite react project:

1. npm init vite@latest . (creates project in same folder)

## Installing Dependencies:

Dependencies:

```
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome bootstrap react react-bootstrap react-icons react-router-dom react-dom
```

Dev Dependencies:

```
npm install --save-dev @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh less sass stylus vite
```

OPTIONAL: X. npm install reactstrap (https://reactstrap.github.io/?path=/story/home-installation--page) X. npm install mdb-ui-kit (https://mdbootstrap.com/docs/standard/getting-started/installation/)

## To run:

To run: cd nikolaikocev/frontend/

```
npm run dev
```

---

# Customize:

### Cleanup and adding basic structure:

_Also, public has been moved to root folder (frontend/public/). This is for your static files._

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
// Custom.scss
// Option A: Include all of Bootstrap
$body-bg: #e4b15f; // Set your desired background color

@import '../../node_modules/bootstrap/scss/bootstrap';
// Include any default variable overrides here (though functions won't be available)

// Then add additional custom code here Like Google Fonts:
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');

// Import your own SCSS files
@import './sticky-footer.scss';
@import '../Components/Accordion/Accordion.scss';
@import '../Components/random-color/randomcolor.scss';
@import '../Components/star-rating/starrating.scss';
@import './nikyinfo.scss';
@import './nikytextinfo.scss';
@import './downloadcvbutton.scss';

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

---

# Docker:

Welcome to the quick start guide for running nikolaikocev's frontend application. This application is containerized and available on Docker Hub, making it easy to download and run on any system with Docker installed.

Prerequisites
Docker installed on your machine. If you do not have Docker installed, please visit the Docker website for installation instructions.

## Run the Application:

Pull the Image:

First, pull the latest version of the application image from Docker Hub by executing the following command in your terminal:

```
docker pull eclair2093/nikyaviator-frontend:latest
```

This command downloads the latest version of the nikolaikocev's frontend application image to your local machine.

Run the Container: After pulling the image, you can run the application with the following command:

```
docker run -p 8080:80 --rm eclair2093/nikyaviator-frontend:latest
```

Here's what each part of the command does:

-p 8080:80: This maps port 8080 on your local machine to port 80 inside the Docker container, allowing you to access the application through your web browser.

--rm: This option tells Docker to automatically remove the container when it exits. This is useful for keeping your system clean and not leaving behind stopped containers.

Specifies the image to use for the container:

eclair2093/nikyaviator-frontend:latest:

## Access the Application:

Open your web browser and navigate to http://localhost:8080.

You should now see nikolaikocev frontend application running.

## Stopping the Application:

Since the --rm flag is used, the container will automatically be removed once you stop it. To stop the application, you can simply press **Ctrl+C** in the terminal window where the container is running.

Additional Notes
The application is set to run on port 8080 of your local machine. If this port is already in use, you may change the host port in the -p argument (e.g., -p 8888:80 to use port 8888 instead).

The latest tag ensures you are running the most recent version of the application. If you need to run a specific version, replace latest with the desired version tag.
