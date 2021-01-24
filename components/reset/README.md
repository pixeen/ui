<!-- ⚠️ This README has been generated from the file(s) "./../../blueprint.md" ⚠️-->
<h1 align="center">@pixeen/reset</h1>

<p align="center">
    <img src="https://img.shields.io/npm/v/@pixeen/reset?style=flat-square?label=VERSION" alt="NPM version</a>">
    <img src="https://img.shields.io/bundlephobia/minzip/@pixeen/reset?label=SIZE&style=flat-square" alt="NPM size</a>">
    <img src="https://img.shields.io/npm/types/@pixeen/reset?style=flat-square&label=WITH" alt="NPM types</a>">
    <img src="https://img.shields.io/npm/l/@pixeen/reset?label=LICENSE&style=flat-square" alt="NPM license</a>">
</p>

<p align="center">
  <b>[WIP] Component Level CSS Reset – Cleaning your CSS property values.</b></br>
  <sub><sub>
</p>

<br />



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Introduction](#-introduction)
* [➤ Usage](#-usage)
* [➤ Use a different CSS reset](#-use-a-different-css-reset)
* [➤ Is important CSS reset](#-is-important-css-reset)
* [➤ Arguments](#-arguments)
* [➤ Why not just unset?](#-why-not-just-unset)
* [➤ Other popular CSS reset base stylings](#-other-popular-css-reset-base-stylings)
* [➤ Getting Started](#-getting-started)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#introduction)

## ➤ Introduction

Applying a CSS reset is beneficial to ensure predictability and consistency in the way browsers render your components.

This CSS Reset component is used to reset the styling on a `component level`. This is usefull it for use-cases like widgets or other stand-alone components.

Keep in mind, this is a `component level` reset and these styles will only apply to it's children. If you actually have full control over the website global styles it's probably a better idea to apply a global CSS reset.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#usage)

## ➤ Usage

By default, it will apply the __Eric Meyer's__ CSS reset.

```html
<Reset>This box has a __Eric Meyer's__ CSS reset</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#use-a-different-css-reset)

## ➤ Use a different CSS reset

```html
<Reset use="normalize">This box has a __Normalize__ reset</Reset>
```

You can select between various popular CSS reset base styles, the following CSS reset base styles are available:

@ todo make this a column.
- **reset**: Eric Meyer CSS Reset (default)
- **normalize**: Normalize CSS
- **cleanslate**: Cleanslate


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#is-important-css-reset)

## ➤ Is important CSS reset

You can enable all CSS reset values as `!important` to fully isolate the component. This avoids having any global element styles `leaking` from their parent elements.

```html
<Reset isImportant>This box has all reset values set to `!important`</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#arguments)

## ➤ Arguments


| Attribute       | Type    | Description                                |
|-----------------|---------|--------------------------------------------|
| **use**         | string  | Determine the CSS reset (default = eric)   |
| **isImportant** | boolean | Marks all CSS reset values as `!important` |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#why-not-just-unset)

## ➤ Why not just unset?

Using `all: unset` revert all the styling to its initial value or inherent value, and both of these values can render a component different depending on the browsers.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#other-popular-css-reset-base-stylings)

## ➤ Other popular CSS reset base stylings

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



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#getting-started)

## ➤ Getting Started

**Install**

```bash
yarn add @pixeen/reset goober
```

**Usage**

```typescript jsx
import { setup } from 'goober';
setup(React.createElement);
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
