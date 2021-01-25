## Introduction

Cleaning your CSS base elements is beneficial to ensure predictability and consistency in the way browsers render your components.

With this small [ReactJS](https://reactjs.org/) component you can define new CSS base elements on a `component scope`, where a traditional the base elements should be cleaned on a `global scope`. However cleaning these base styles on a `component scope` is useful for stand-alone components, such as widgets, or other scenarios where you don't have full control over its environment.

It's important to understand that this `Reset` component will only apply new base styles to its child components.

Additionally, you can isolate fully isolate your component by [passing the `isImportant` attribute](#-isolate-your-component).

Keep in mind; if you actually have control over your projects global styles, it's probably a better idea clean the base styles on a `global scope` instead. Here's a list of the most popular global [CSS base element cleaners](#-global-base-style-cleaners) available.

## Default usage

By default, it will apply the __Eric Meyer's__ CSS reset.

```html
<Reset>This component has a Eric Meyer's CSS reset applied</Reset>
```

## Arguments

{{ arguments }}

## Isolate your component

By setting `isImportant` you enable all CSS reset values to be `!important` inside the `component scope`. This avoids having any global element styles `leaking` from their parent elements and makes it possible to fully isolates your component and its children.

```html
<Reset isImportant>This box has all reset values set to `!important`</Reset>
```

## Alternative resets

You can also use `normalize`, which is another popular CSS reset package.

```html
<Reset use="normalize">This component has Nicolas Gallagher Normalize.css applied</Reset>
```

You can use various popular CSS reset base styles. The following CSS reset base styles are available:

{{ implementedPresets }}

## Use your own CSS reset

Alternatively you can also use your own custom CSS reset. (write more here)

## Why not just use all unset?

Using `all: unset` revert all the styling to its initial value or inherent value, and both of these values can render a component different depending on the browsers.

## Global base style cleaners

These CSS resets might be implemented in the future to use with this `Reset` component.

{{ allPresets }}
