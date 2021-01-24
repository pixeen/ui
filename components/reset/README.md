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
* [➤ Properties](#-properties)
* [➤ Presets](#-presets)
* [➤ Getting Started](#-getting-started)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#introduction)

## ➤ Introduction

Applying a CSS reset is beneficial to ensure predictability and consistency in the way browsers render your components. The CSS Reset component is used to reset the component styling and all of its children. A `scoped` reset is useful for use-cases like widgets, embeds or stand-alone components.

Since this is a `scoped` component the reset will only apply to the component and it's children. Additionally it you can define all of it's clean css values as `!important`, this makes sure that there are not styles `leaking` from the components parent container.

If you have full control over the website it' probably s a better idea to create global styles and apply a CSS reset there..


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#usage)

## ➤ Usage

By default, the reset component applies __Eric Meyer's__ CSS reset, however there are multiple [other popular presents available](#-presets).

```html
<Reset>This box has a reset</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#properties)

## ➤ Properties


| Attribute  | Type    | Description                          |
|------------|---------|--------------------------------------|
| **use**    | string' | Determines the size                  |
| **active** | boolean | Whether the element is active or not |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#presets)

## ➤ Presets

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
