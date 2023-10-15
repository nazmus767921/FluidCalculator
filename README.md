# User Guide: Fluid Font Sizes with CSS Clamp

Welcome to our website! This guide will help you understand how to use our project to create fluid font sizes using CSS clamp. With this feature, your website's font sizes can automatically adjust to different screen sizes, providing a better user experience.

## Getting Started

To start using our website, follow these simple steps:

1. Open our website in your web browser.
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
2. Paste the code into your project's CSS file.
3. Save the CSS file and refresh your website.

## Example

Let's go through an example to demonstrate how to use our website:

1. Suppose you want a minimum font size of 12 pixels and a maximum font size of 24 pixels.
2. You also want the font sizes to change at two breakpoints: 768 pixels and 1024 pixels.
3. Enter 12 in the "Minimum Font Size" field and 24 in the "Maximum Font Size" field.
4. Enter 768 in the "Breakpoint" field and click the "+" button to add it.
5. Enter 1024 in the "Breakpoint" field and click the "+" button to add it.
6. Click the "Calculate" button.
```css
@media only screen and (min-width: 768px and max-width: 1024px) {
    body {
      font-size: 1rem; /* browser support fallback */
      font-size: clamp(0.8rem, 4.68750vw + -1.50000rem, 1.5rem);
    }
  };
  ```
7. Copy the generated CSS code and paste it into your project's CSS file.

## Conclusion

Congratulations! You've learned how to use our website to create fluid font sizes using CSS clamp. By following these steps, you can ensure that your website's font sizes adapt smoothly to different screen sizes.

---

_*Developer Information:*_

This project was developed by `Nazmus Sakib` from [404_founded](https://t.me/founded_404). If you have any technical questions or need to report a bug, please reach out to me at [nazmus767921@gmail.com]().

Thank you for using the website!

_`Nazmus Sakib`_
