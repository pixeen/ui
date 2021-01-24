## Introduction

Applying a CSS reset is beneficial to ensure predictability and consistency in the way browsers render your components. The CSS Reset component is used to reset the component styling and all of its children. A `scoped` reset is useful for use-cases like widgets, embeds or stand-alone components.

Since this is a `scoped` component the reset will only apply to the component and it's children. Additionally it you can define all of it's clean css values as `!important`, this makes sure that there are not styles `leaking` from the components parent container.

If you have full control over the website it' probably s a better idea to create global styles and apply a CSS reset there..

## Usage

By default, the reset component applies __Eric Meyer's__ CSS reset, however there are multiple [other popular presents available](#-presets).

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
