# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

The challenge was to build a URL shortening application with the following features:

- **Responsive Design**: The site should look great on all devices, from mobile to desktop.
- **URL Shortening**: Users should be able to shorten any valid URL.
- **Link History**: Shortened links should be saved and displayed, even after refreshing the page.
- **Copy to Clipboard**: Users should be able to copy the shortened link with a single click.
- **Error Handling**: Display an error message if the input field is empty or the URL is invalid.

### Screenshot

![Screenshot](./screenshot.jpg)

### Links

- [![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/DmitryIsTrying/shortening-landing)
- [![Live Site](https://img.shields.io/badge/Live-Site-green)](https://dmitryistrying.github.io/shortening-landing)

---

## My Process

### Built With

- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white)
- ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat&logo=redux&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
- ![PNPM](https://img.shields.io/badge/PNPM-F69220?style=flat&logo=pnpm&logoColor=white)

### What I Learned

While working on this project, I learned:

- How to integrate with a third-party URL shortening API.
- How to manage state in React to store and display shortened links.
- How to use the Clipboard API to copy text to the clipboard.
- The importance of error handling and user feedback in forms.

Here’s a code snippet I’m proud of:

```typescript
function dispatchLoadingEvent(isLoading: boolean) {
  const event = new CustomEvent<LoadingEventDetail>(appLoadingEvent, {
    detail: { isLoading },
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event);
}
```

### Continued Development

In future projects, I’d like to focus on:

- **Improving accessibility for all users.**
- **Adding animations and transitions for a smoother user experience.**
- **Exploring backend development to create a custom URL shortening service.**

### Useful Resources

- [![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-000000?style=flat&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/)
- [![React Docs](https://img.shields.io/badge/React_Docs-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/docs/getting-started.html)
- [![CSS-Tricks](https://img.shields.io/badge/CSS_Tricks-000000?style=flat&logo=css3&logoColor=white)](https://css-tricks.com/)

---

## Author

- **Dmitry Smirnov**
- [![GitHub](https://img.shields.io/badge/GitHub-DmitryIsTrying-blue?logo=github)](https://github.com/DmitryIsTrying)
- [![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-DmitryIsTrying-blue)](https://www.frontendmentor.io/profile/DmitryIsTrying)

---

## Acknowledgments

I’d like to thank:

- The team at [Frontend Mentor](https://www.frontendmentor.io/) for providing this challenge.
- The open-source community for creating amazing tools like React and Vite.
