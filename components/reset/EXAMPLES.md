## Introduction

Applying a CSS reset is beneficial to ensure predictability and consistency in the way browsers render your components. The CSS Reset component is used to reset the component styling and all of its children. A `scoped` reset is useful for use-cases like widgets, embeds or stand-alone components.

Since this is a `scoped` component the CSS reset will only apply to the component and it's children. If you have full control over the website it' probably s a better idea to create global styles and apply a CSS reset there..

## Usage

By default, `Reset` component applies the __Eric Meyer's__ CSS reset.

```html
<Reset>This box has a __Eric Meyer's__ CSS reset</Reset>
```

## Arguments

{{ arguments }}

## Use a different CSS reset

You can select between various popular CSS reset base styles.

```html
<Reset use="normalize">This box has a __Normalize__ reset</Reset>
```

The following CSS reset base styles are available:

@ todo make this a column.
- **reset**: Eric Meyer CSS Reset (default)
- **normalize**: Normalize CSS
- **cleanslate**: Cleanslate

## Is important CSS reset

You can enable all CSS reset values as `!important`, which make sense to fully isolates the component. This avoids any styles are leaking in from their parent..

```html
<Reset isImportant>This box has all reset values set to `!important`</Reset>
```

These CSS reset base styles might be implemented in the future.

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
