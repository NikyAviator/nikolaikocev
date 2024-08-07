# nikolaikocev

## Project Overview:

**Hello!**

_I'm excited to share some insights into the development of my personal website, a project that's not just a showcase of my skills but also a testament to my journey in software development. Currently, the project architecture is bifurcated into two main segments: the frontend and the backend. As of now, the backend is in its initial stages, poised for future expansions including the integration of blog functionality to enrich the site's content and user engagement._

_The frontend, which is the heart of this project at the moment, is crafted using React alongside vanilla JavaScript, with Vite serving as the powerhouse builder. For styling, I've leaned into the robust capabilities of Bootstrap 5, ensuring a sleek and responsive design across all devices. Furthermore, embracing modern development practices, the entire frontend is dockerized, ensuring consistency across various development environments and simplifying deployment processes._

_An exciting feature of this project is its hosting solution. Through the generous assistance of my friend, Adam Wamai Egesa, the site is currently hosted on Cloudflare, benefiting from its global CDN and web security services. This collaboration has been instrumental in bringing the project to life on the web._

Looking ahead, I am planning to expand the project's backend using Node.js and MongoDB. This decision is influenced by my summer work experience at IKEA, where these technologies are extensively used. This addition will introduce the ability to manage user logins and pave the way for dynamic features such as a blog. This progression will mark a significant milestone in evolving the site from a static to a dynamic platform, offering a richer user experience.

_Equally important to the project's technological stack is the documentation. The project's README.md serves as a comprehensive guide for anyone looking to construct a skeleton project utilizing Vite and React. This documentation is intended to streamline the setup process for similar projects, encapsulating the essence of building modern web applications with efficiency and ease._

_In essence, this project is a living reflection of my evolving expertise in software development, showcasing a blend of current technologies and a vision for future enhancements. Stay tuned for the upcoming features and improvements as I continue to explore and integrate more functionalities into the website._

_Kind regards,_

_Nikolai Kocev_

**Let's start with the frontend:**

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
