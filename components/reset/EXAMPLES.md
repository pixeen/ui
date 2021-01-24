## Introduction

Applying a CSS reset is beneficial to ensure predictability and consistency in the way browsers render your components.

This CSS Reset component is used to reset the CSS styling on a `component level` instead of a global level. This is very useful for use-cases like widgets or other stand-alone components.

Keep in mind, this is a `component level` reset and these styles will only apply to it's children. If you actually have full control over the website global styles it's probably a better idea to apply a global CSS reset.

## Usage

By default, it will apply the __Eric Meyer's__ CSS reset.

```html
<Reset>This component has a Eric Meyer's CSS reset applied</Reset>
```

## Alternative presets

```html
<Reset use="normalize">This component has Nicolas Gallagher Normalize.css applied</Reset>
```

You can select between various popular CSS reset base styles, the following CSS reset base styles are available:

{{ presets }}

## Isolate your component

By setting `isImportant` you enable all CSS reset values to be `!important`. This avoids having any global element styles `leaking` from their parent elements and will fully isolate your component.

```html
<Reset isImportant>This box has all reset values set to `!important`</Reset>
```

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
