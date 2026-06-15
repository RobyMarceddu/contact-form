# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./conctact-form-screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-react-contact-form-with-json-driven-validation-and-tailwind-3ilGlQJvv7](https://www.frontendmentor.io/solutions/responsive-react-contact-form-with-json-driven-validation-and-tailwind-3ilGlQJvv7)
- Live Site URL: [https://contact-form-main-sigma-three.vercel.app/](https://contact-form-main-sigma-three.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

This challenge was my first real practice project with React, and it helped me understand how React manages the UI differently from vanilla JavaScript.

The main concept I learned is that in React I do not directly manipulate the DOM with methods like `querySelector` or `classList`. Instead, I update the component state, and React re-renders the UI based on that state.

I practiced using `useState` to manage both the form data and the validation errors:

```js
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
});

const [errors, setErrors] = useState({});
```

I also learned how controlled components work. Each input value is connected to React state, and every user interaction updates that state through a shared `handleChange` function.

Another important part of this project was building the form from a JSON structure. Instead of hardcoding every field manually, I used a data-driven approach and rendered the fields dynamically. This helped me understand how React can generate UI from structured data.

I also practiced:

* creating a React project with Vite;
* rendering form fields dynamically from JSON;
* managing form data with `useState`;
* working with controlled inputs, radio buttons and checkboxes;
* validating user input on submit;
* displaying error messages conditionally;
* applying different Tailwind CSS classes based on error state;
* creating a responsive layout with Tailwind;
* understanding the difference between direct DOM manipulation and React state-driven rendering.

This project helped me see React as a way to describe the UI based on data: when the state changes, the interface changes with it.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Helpful for styling the form components.
- [React Documentation](https://react.dev/) - Great reference for hooks and state management.

### AI Collaboration

This project was developed through a step-by-step collaboration where the developer directed the work and the AI assisted with implementation, explanations, and code suggestions.

The project was built with **opencode** (powered by big-pickle), an AI coding assistant. The AI helped with:

- Structuring the React components and form logic
- Implementing controlled inputs with useState
- Form validation and error handling
- Tailwind CSS configuration and responsive design
- Adding bilingual comments for learning purposes

## Author

- Frontend Mentor - [@RobyMarceddu](https://www.frontendmentor.io/profile/RobyMarceddu)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the opencode AI assistant for guidance throughout the build process.
