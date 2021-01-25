## Introduction

**Cleaning your CSS base elements helps to ensure predictability and consistency in the way browsers render your components.**

Usually a reset of the CSS base elements is done in the `global scope` by loading CSS cleaners such as `reset` or `normalize`.

However, sometimes you don't have full control off the environment where your components run. This can lead to situations where styles from the `global scope` unwillingly 'bleeding' into your components.

This is a small component for [ReactJS](https://reactjs.org/) where you can define new CSS base elements on a `component scope`, where a traditional the base elements should be cleaned on a `global scope`.

Cleaning base element styles on a `component scope` is very useful for stand-alone components such as widgets, or other cases where you don't have full control over the environment it runs.

❗ If you have control over your global styles, it's a better idea to apply element styles on a `global scope` instead. Here's a list of the most popular [Global CSS style cleaners](#-global-css-cleaners) available.

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
<Reset isImportant>This sets reset values to `!important`</Reset>
```

## Further isolate your component

In some cases you might just want to avoid `all possible` elements leak into your component. With the `isIsolated` argument you can reset all possible CSS leakage.

**There are two downsides to this approach:**

1. comes with a price in terms of CSS file-size (@todo calculate).
2. You can't bring your own `preset`, this will clean + set `!important for ALL possible CSS styles.

```html
<Reset isVeryImportant>This cleans ALL the CSS styles</Reset>
```

## Alternative element styles

You can also use `normalize`, which is another popular CSS reset package.

```html
<Reset use="normalize">This component has Nicolas Gallagher Normalize.css applied</Reset>
```

It's possible to use the `isImportant` attribute for any given base style.

```html
<Reset use="modern" isImportant>This component has Normalize.css and marked as `!important`</Reset>
```

## Available styles

The following CSS reset base styles are available

{{ implementedPresets }}

## Bring your own styles

Use your own custom CSS reset

```
<CustomReset use="../path/to/elements.css">This has a custom reset</CustomReset>
```

It's possible to set the `isImportant` argument for your own custom reset. This will make all your element styles to be `!important`.

It's not possible to set the `

## Global CSS cleaners

These CSS resets might be implemented as options in the future.

{{ allPresets }}

## Why not...?

**Why not just use `all unset`?**

Using `all: unset` revert all the styling to its initial value or inherent value, and both of these values can render a component different depending on the browsers.

**Why not just use `iframes`?**

Frames are a way to achieve certain effects and/or solve certain problems in web design. Frames have some compelling advantages, but they also have some serious disadvantages. [The pros and cons of frames](https://www.mediacollege.com/internet/html/frames/pros-cons.html) is a somewhat subjective topic and this page reflects the opinions of the author, Dave Owen. Other people may have differing opinions.
