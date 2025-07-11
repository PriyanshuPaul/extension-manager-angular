# Frontend Mentor - Browser extensions manager UI solution

![Design preview for the Browser extensions manager UI coding challenge](./preview.jpg)

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

The Extension Dashboard is a responsive, dynamic web application built using Angular and Tailwind CSS, designed to showcase and manage a curated list of browser extensions. The interface allows users to seamlessly filter, view, and interact with extension cards in a modern, dark-mode friendly UI.

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL=](https://github.com/PriyanshuPaul/extension-manager-angular)
- Live Site URL: [Live Site URL](https://extension-manager-angular.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS v4 custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Reactive Data Flow through immutable updates and proper tracking with trackBy
- [Angular 17+](https://angular.dev/) - used standalone components and control flow syntax
- [Tailwind css](https://tailwindcss.com/) - for utility-first, responsive styling

### What I learned

Using tailwind css for dynamic theming and integrating with angular.

```html
<button [class.active]="selectedIndex === $index" (click)="onPillBtnClick($index)">{{btn}}/></button>
```

setting dark active and active class for theming with Tailwind.

```css
@custom-variant active (&:where(.active, .active *));
@custom-variant dark-active (&:where(.dark.active, .dark.active *, .dark .active, .dark .active *));
```

Deploying with netlify

```js
[build];
command = "npm run build";
publish = "dist/extension-manager-angular/browser";
```

### Continued development

Future development of the Extension Dashboard will focus on enhancing interactivity, accessibility, and scalability. Key areas include:

- **Persistent State Management**: Store user changes locally or integrate with backend services for long-term state retention.
- **Search and Tagging**: Implement search input and advanced filters to improve discoverability.
- **Animations & Transitions**: Improve visual flow with Angular animations for card entry/removal.
- **Unit & Integration Testing**: Expand test coverage to ensure stability and reliability.
- **Backend Integration**: Prepare for API connectivity to support real-time data updates and centralized extension management.

These improvements aim to evolve the project into a production-ready, extensible interface suitable for both local and cloud-based use cases.

### Useful resources

- [Tailwind documentation](https://tailwindcss.com/) - This helped me for understanding and using tailwind classes.

## Author

- Website - [Priyanshu Paul](https://www.linkedin.com/in/priyanshu-paul-048772a5/)
- Frontend Mentor - [@PriyanshuPaul](https://www.frontendmentor.io/profile/PriyanshuPaul)
