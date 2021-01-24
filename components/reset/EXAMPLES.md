## Introduction

Applying a CSS reset is beneficial to ensure predictability and consistency in the way browsers render your components. The CSS Reset component is used to reset the component styling and all of its children. A `scoped` reset is useful for use-cases like widgets, embeds or stand-alone components.

Since this is a `scoped` component the reset will only apply to the component and it's children. If you have full control over the website it's a better idea to apply a global CSS Reset.

## Usage

By default, de Reset component applies Eric Meyer's CSS Reset, however there are multiple [other popular presents available](#-presets).

```html
<Reset>This box has a reset</Reset>
```

## Properties

{{ properties }}

## Presets

The following CSS reset presets are available:

- **erik**: Eric Meyer CSS Reset
- **normalize**: Normalize CSS
- **cleanslate**: Cleanslate
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
