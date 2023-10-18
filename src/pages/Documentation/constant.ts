import React from "react";

interface ConstantData {
  title: string;
  body?: string;
  points?: {
    header?: string;
    list: string[];
  };
  code?: string;
}

export const user_guide: ConstantData = {
  title: "User Guide: Fluid Font Sizes with CSS Clamp",
  body: "Welcome to Fluid Calculator! This guide will help you understand how to use this project to create fluid font sizes using CSS clamp. With this feature, your website's font sizes can automatically adjust to different screen sizes, providing a better user experience.",
};

export const getting_started: ConstantData = {
  title: "Getting Started",
  points: {
    header: "To start using this website, follow these simple steps:",
    list: [
      "Open fluid calculator website website in your web browser.",
      "You'll see an interface with input fields and buttons to configure font sizes and breakpoints.",
    ],
  },
};

export const setting_up: ConstantData = {
  title: "Setting up Fluid Font Sizes",
  points: {
    header:
      "To create fluid font sizes for your website, you need to define the minimum and maximum font sizes, as well as the breakpoints where the font sizes change. Follow these steps:",
    list: [
      `Enter the minimum font size you want to use in the "Minimum Font Size" field.`,
      `Enter the maximum font size you want to use in the "Maximum Font Size" field.`,
      `Specify the breakpoints at which the font sizes should change. For example, you might want to set a breakpoint at 768 pixels and another at 1024 pixels.`,
    ],
  },
};

export const generate_css: ConstantData = {
  title: "Generating CSS Code",
  points: {
    header:
      "Once you've set up the font sizes and breakpoints, you can generate the CSS code to apply the fluid font sizes. Here's how:",
    list: [
      `Click the "Calculate" button.`,
      "The generated CSS code will appear on the screen.",
    ],
  },
};

export const apply: ConstantData = {
  title: "Applying Fluid Font Sizes",
  points: {
    header:
      "To apply the fluid font sizes to your website, follow these steps:",
    list: [
      "Copy the generated CSS code.",
      "Paste the code into your project's CSS file.",
      "Save the CSS file and refresh your website.",
    ],
  },
};

export const manage_calc: ConstantData = {
  title: "Managing Calculator Instances",
  points: {
    header:
      "You can add multiple (upto 5, you won't need more than that i guess) calculator instances to calculate without leaving the site or reloading it. Each instance can have its own set of font sizes and breakpoints. Here's how to manage calculator instances:",
    list: [
      `To add a new calculator instance, click the "+" button beside each calculator instance.`,
      `To remove a calculator instance, click the "-" button beside the specific calculator instance you want to remove.`,
    ],
  },
};

export const example: ConstantData = {
  title: "Example",
  points: {
    header:
      "Let's go through an example to demonstrate how to use this website:",
    list: [
      `Suppose you want a minimum font size of 12 pixels and a maximum font size of 24 pixels.`,
      `You also want the font sizes to change at two breakpoints: 768 pixels and 1024 pixels.`,
      `Enter 12 in the "Minimum Font Size" field and 24 in the "Maximum Font Size" field.`,
      `Enter 768 in the "Breakpoint" field and click the "+" button to add it.`,
      `Enter 1024 in the "Breakpoint" field and click the "+" button to add it.`,
      `Click the "Calculate" button.`,
      `You'll get your calculated code as shown below.`,
      `Copy the generated CSS code and paste it into your project's CSS file or in your main styling file.`,
    ],
  },
  code: `@media only screen and (min-width: 768px and max-width: 1024px) {
    html {
      font-size: 1rem; /* browser support fallback */
      font-size: clamp(0.8rem, -1.5rem + 4.6875vw, 1.5rem);
    }
  }`,
};

export const conclusion: ConstantData = {
  title: "Conclusion",
  body: "Congratulations! You've learned how to use fluid calculator to create fluid font sizes using CSS clamp. By following these steps, you can ensure that your website's font sizes adapt smoothly to different screen sizes.",
};

