<!-- ⚠️ This README has been generated from the file(s) "./../../blueprint.md" ⚠️-->
<h1 align="center">@pixeen/reset</h1>

<p align="center">
    <img src="https://img.shields.io/npm/v/@pixeen/reset?style=flat-square?label=VERSION" alt="NPM version</a>">
    <img src="https://img.shields.io/bundlephobia/minzip/@pixeen/reset?label=SIZE&style=flat-square" alt="NPM size</a>">
    <img src="https://img.shields.io/npm/types/@pixeen/reset?style=flat-square&label=WITH" alt="NPM types</a>">
    <img src="https://img.shields.io/npm/l/@pixeen/reset?label=LICENSE&style=flat-square" alt="NPM license</a>">
</p>

<p align="center">
  <b>[WIP] Scoped CSS Reset – Cleaning your CSS to baseline property values.</b></br>
  <sub><sub>
</p>

<br />



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Introduction](#-introduction)
* [➤ Usage](#-usage)
* [➤ Arguments](#-arguments)
* [➤ Use different preset](#-use-different-preset)
* [➤ Getting Started](#-getting-started)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#introduction)

## ➤ Introduction

Applying a CSS reset is beneficial to ensure predictability and consistency in the way browsers render your components. The CSS Reset component is used to reset the component styling and all of its children. A `scoped` reset is useful for use-cases like widgets, embeds or stand-alone components.

Since this is a `scoped` component the CSS reset will only apply to the component and it's children. If you have full control over the website it' probably s a better idea to create global styles and apply a CSS reset there..


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#usage)

## ➤ Usage

By default, `Reset` component applies the __Eric Meyer's__ CSS reset.

```html
<Reset>This box has a __Eric Meyer's__ CSS reset</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#arguments)

## ➤ Arguments


| Attribute       | Type    | Description                                |
|-----------------|---------|--------------------------------------------|
| **use**         | string  | Determine the CSS reset (default = eric)   |
| **isImportant** | boolean | Marks all CSS reset values as `!important` |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#use-different-preset)

## ➤ Use different preset

You can select between various popular CSS reset presets.

```html
<Reset use="normalize">This box has a reset</Reset>
```

The following CSS reset presets are available:

Optionally you can define all applied CSS reset values as `!important`, this makes sure that there are not styles `leaking` from the components parent components.


- **reset**: Eric Meyer CSS Reset (default)
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
