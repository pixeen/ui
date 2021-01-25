## Introduction

**Cleaning your CSS base elements helps to ensure predictability and consistency in the way browsers render your components.**

Usually it's solved on a `global scope` by applying a global CSS cleaner (reset,normalize,etc) and having control of the 'load order'.

However, sometimes you don't have full control off the environment where your components run. This can lead to situations where the `global scope` styles are 'bleeding' into your component.

This is a very small [ReactJS](https://reactjs.org/) component where you can define new CSS base elements on a `component scope`, where a traditional the base elements should be cleaned on a `global scope`. Cleaning base styles on a `component scope` is very useful for stand-alone components such as widgets, or other cases where you don't have full control over the environment it runs.

It's important to note that this component will only apply your element styles to itself and its child components, it will not fully prevent you from unwillingly getting element styles from the parent component. You can protect your component from that by providing [the `isImportant` attribute](#-isolate-your-component).

If you actually have control over your projects global styles, it's probably a better idea clean the base styles on a `global scope` instead. Here's a list of the most popular global [CSS base element cleaners](#-global-base-style-cleaners) available.

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

## Further isolate your component

In some cases you might just want to avoid `all possible` elements leak into your component. With the `isIsolated` argument you can reset all possible CSS leakage. However this comes with a price in terms of CSS file-size (@todo calculate).

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

## Why not just iframes?

Frames are a way to achieve certain effects and/or solve certain problems in web design. Frames have some compelling advantages, but they also have some serious disadvantages. [The pros and cons of frames](https://www.mediacollege.com/internet/html/frames/pros-cons.html) is a somewhat subjective topic and this page reflects the opinions of the author, Dave Owen. Other people may have differing opinions.

## Global base style cleaners

These CSS resets might be implemented in the future to use with this `Reset` component.

{{ allPresets }}
