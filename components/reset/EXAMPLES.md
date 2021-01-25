## Introduction

Defining new CSS base elements is beneficial to ensure predictability and consistency in the way browsers render your components.

This `Reset` component is used to define new CSS base elements on a `component level` instead of a global level.

This is very useful for use-cases like widgets or other stand-alone components where you have no control over it's `runtime`.

It's important to understand that a the `Reset` component will only apply new base styles to its child components.

Additionally, you can fully isolate the component with setting the `isImportant` attribute.

If you actually have control over your project global styles, it's probably a better idea clean the base styles on a global level instead.

## Default usage

By default, it will apply the __Eric Meyer's__ CSS reset.

```html
<Reset>This component has a Eric Meyer's CSS reset applied</Reset>
```

## Isolate your component

By setting `isImportant` you enable all CSS reset values to be `!important`. This avoids having any global element styles `leaking` from their parent elements and will fully isolate your component.

```html
<Reset isImportant>This box has all reset values set to `!important`</Reset>
```

## Alternative resets

You can also use `normalize`, which is another popular CSS reset package.

```html
<Reset use="normalize">This component has Nicolas Gallagher Normalize.css applied</Reset>
```

You can use various popular CSS reset base styles. The following CSS reset base styles are available:

{{ presets }}

## Use your own CSS reset

Alternatively you can also use your own custom CSS reset.

## Arguments

{{ arguments }}

## Why not just use all unset?

Using `all: unset` revert all the styling to its initial value or inherent value, and both of these values can render a component different depending on the browsers.

## Popular CSS reset styling presets

These CSS resets might be implemented in the future.

- **yui2**: Yahoo! CSS Reset (YUI 2)
- **yui3**: Yahoo! CSS Reset (YUI 3)
- **shaun**: Shaun Inman’s CSS Reset
- **tantek**: Tantek’s CSS Reset
- **universal**: Universal CSS Reset
- **mr1**: Minimalist Reset 1
- **mr2**: Minimalist Reset 2
- **mr3**: Minimalist Reset 3
- **poor**: Poor Man’s CSS Reset
- **siolon**: Siolon’s CSS Reset
- **tripoli**: Tripoli CSS Reset
- **simpler**: a simpler reset
- **vanilla**: Vanilla CSS Reset
- **mini**: Mini CSS Reset
- **doctor**: HTML5 Doctor Reset
- **cleanslate**: Cleanslate
