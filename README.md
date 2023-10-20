# User Guide: Fluid Font Sizes with CSS Clamp

Welcome to Fluid Calculator! This guide will help you understand how to use this project to create fluid font sizes using CSS clamp. With this feature, your website's font sizes can automatically adjust to different screen sizes, providing a better user experience.

## [Live Website Link](https://fluidtypo.netlify.app/)

## Getting Started

To start using this website, follow these simple steps:

1. Open fluid calculator website Homepage in your web browser by clicking [Here](https://fluidtypo.netlify.app/)
2. You'll see an interface with input fields and buttons to configure font sizes and breakpoints.

## Setting up Fluid Font Sizes

To create fluid font sizes for your website, you need to define the minimum and maximum font sizes, as well as the breakpoints where the font sizes change. Follow these steps:

1. Enter the minimum font size you want to use in the "Minimum Font Size" field.
2. Enter the maximum font size you want to use in the "Maximum Font Size" field.
3. Specify the breakpoints at which the font sizes should change. For example, you might want to set a breakpoint at 768 pixels and another at 1024 pixels.

## Generating CSS Code

Once you've set up the font sizes and breakpoints, you can generate the CSS code to apply the fluid font sizes. Here's how:

1. Click the "Calculate" button.
2. The generated CSS code will appear on the screen.

## Applying Fluid Font Sizes

To apply the fluid font sizes to your website, follow these steps:

1. Copy the generated CSS code.
2. Paste the code into your project's CSS file's root element. Typically the 'html' or 'body' tag.
3. Save the CSS file and refresh your website.
4. After applying the CSS, use responsive units, 'em' or 'rem' for specifying measurements, such as font size, paddings, margins, width, height, and more.

## Managing Calculator Instances

You can add multiple (up to 5, you won't need more than that I guess) calculator instances to calculate without leaving the site or reloading it. Each instance can have its own set of font sizes and breakpoints. Here's how to manage calculator instances:

- To add a new calculator instance, click the "+" button beside each calculator instance.
- To remove a calculator instance, click the "-" button beside the specific calculator instance you want to remove.

## Example

Let's go through an example to demonstrate how to use this website:

1. Suppose you want a minimum font size of 12 pixels and a maximum font size of 24 pixels.
2. You also want the font sizes to change at two breakpoints: 768 pixels and 1024 pixels.
3. Enter 12 in the "Minimum Font Size" field and 24 in the "Maximum Font Size" field.
4. Enter 768 in the "Breakpoint" field.
5. Enter 1024 in the "Breakpoint" field.
6. Click the "Calculate" button.

```css
@media only screen and (min-width: 768px and max-width: 1024px) {
  body {
    font-size: 1rem; /* browser support fallback */
    font-size: clamp(0.8rem, -1.5rem + 4.6875vw, 1.5rem);
  }
}
```

7. Copy the generated CSS code and paste it into your project's CSS file.

## Conclusion

Congratulations! You've learned how to use fluid calculator to create fluid font sizes using CSS clamp. By following these steps, you can ensure that your website's font sizes adapt smoothly to different screen sizes.

---

## Credits

- This calculator was made using the theory of [Aleksandr Hovhannisyan's blog post on fluid type scale with CSS clamp](https://www.aleksandrhovhannisyan.com/blog/fluid-type-scale-with-css-clamp/).
- The website design is inspired by [Wizardry Technique](https://wizardry-technique.webflow.io/).

## Learn More about Fluid Typography

If you want to learn more about fluid typography, I recommend reading the article [Fluid vs Responsive Typography: CSS Clamp](https://blog.logrocket.com/fluid-vs-responsive-typography-css-clamp/). It provides additional insights into the benefits and implementation of fluid typography.

---

_*Developer Information:*_

This project was developed by `Nazmus Sakib` from [404_founded](https://t.me/founded_404). If you have any technical questions or need to report a bug, please reach out to me at [nazmus767921@gmail.com]().

Thank you for using the website!

_`Nazmus Sakib`_
