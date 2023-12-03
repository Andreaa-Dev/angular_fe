- API: `https://fakeapi.platzi.com/`

### Requirements

- [] Item 1
- [x] Item 2
- [ ] Item 3

- [x] display product list
- [x] product detail
- [x] add favorite
- [x] check item before add the fav list
      [x] search product by name (onChange)
      [ ] sort/filter (https://tailwindui.com/components/application-ui/elements/dropdowns)
      [x] log in in component
      [ ] fetch user by id to display user profile
      [ ] put authToken in env file
      [ ] alert in cart does not work
      [ ] navigate user to log in page after register
      [ ] log out
      [ ] log in with Google
      [ ] guards to protect certain routes.
      [ ] test

### Questions

1. log in in component or ngRx

### Notes

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

3. Concepts

- ngOnInit(): void {}: A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.
- Observable: listener - subscribe
  product observe change from store
  ex: productFavorite$!: Observable<Product[]>;

3. State management - Ngrx

- https://ngrx.io/
- mutate state:
  way 1:

```
import update from 'immutability-helper';

on(CartActions.increaseQuantity, (state, { cart }) => {
  const foundItemIndex = state.findIndex((item) => item.id === cart.id);
  if (foundItemIndex !== -1) {
    return update(state, {
      [foundItemIndex]: { quantity: { $set: state[foundItemIndex].quantity + 1 } },
    });
  }
  return state;
});
```

way 2

```
on(CartActions.increaseQuantity, (state, { cart }) => {
  return state.map((item) => (item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item));
});
```

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
