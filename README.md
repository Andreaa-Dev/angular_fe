# Project

[Live version](https://angular-fe-lemon.vercel.app/)

1. Information
   1.1 Basic information

- component-based framework - scalable web applications
- features: routing, form, client-server
- develop, build,test and upgrade
  1.2 Concepts
- product.component.ts as component
- selector: defines the name (when render in other files)
- html template: control what display on the screen

2. Create project

- ng new my-app

- ng server --open
  (ng: )
  - \*ngFor: map

3. State management - Ngrx
   https://ngrx.io/

4. styling - Tailwind

4.1 Step 1: install packages

- install packages: tailwindcss, postcss,autoprefixer
- generate configuration file:

  4.2 Step 2: configure Styles

  ```
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  ```

  customize if needed in `tailwind.config.js`

  ```
  module.exports = {
  theme: {
  extend: {
  backgroundColor: {
  'custom-color': '#your-color-code',
  },
  },
  },
  variants: {},
  plugins: [],
  };

  ```
