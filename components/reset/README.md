<!-- ⚠️ This README has been generated from the file(s) "./../../blueprint.md" ⚠️-->
<h1 align="center">@pixeen/reset</h1>

<p align="center">
    <img src="https://img.shields.io/npm/v/@pixeen/reset?style=flat-square?label=VERSION" alt="NPM version</a>">
    <img src="https://img.shields.io/bundlephobia/minzip/@pixeen/reset?label=SIZE&style=flat-square" alt="NPM size</a>">
    <img src="https://img.shields.io/npm/types/@pixeen/reset?style=flat-square&label=WITH" alt="NPM types</a>">
    <img src="https://img.shields.io/npm/l/@pixeen/reset?label=LICENSE&style=flat-square" alt="NPM license</a>">
</p>

<p align="center">
  <b>[WIP] Component Level CSS Reset – Cleaning your CSS base elements.</b></br>
  <sub><sub>
</p>

<br />



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#getting-started)

## ➤ Getting Started

**Install**

```bash
yarn add @pixeen/reset goober
```

**Usage**

```typescript jsx
import { setup } from 'goober';
import Reset from '@pixeen/reset'

setup(React.createElement);

<Reset>this</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Getting Started](#-getting-started)
* [➤ Introduction](#-introduction)
* [➤ Default usage](#-default-usage)
* [➤ Isolate your component](#-isolate-your-component)
* [➤ Alternative resets](#-alternative-resets)
* [➤ Use your own CSS reset](#-use-your-own-css-reset)
* [➤ Arguments](#-arguments)
* [➤ Why not just use all unset?](#-why-not-just-use-all-unset)
* [➤ Global base style cleaners](#-global-base-style-cleaners)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#introduction)

## ➤ Introduction

Defining new CSS base elements is beneficial to ensure predictability and consistency in the way browsers render your components.

The `Reset` component is build for [ReactJS](https://reactjs.org/) and is used to define new CSS base elements on a `component scope` instead of a traditional `global scope`. Cleaning base styles on a component scope is very useful for use-cases like widgets or other stand-alone components where you have no control over its environment. It's important to understand that this `Reset` component will only apply new base styles to its child components.

Additionally, you can fully isolate the component and apply the `isImportant` attribute to the `Reset` component.

If you actually have control over your project global styles, it's probably a better idea clean the base styles on a `global scope` instead. Here's a list of the most popular global [CSS base element cleaners](#-global-base-style-cleaners) available.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#default-usage)

## ➤ Default usage

By default, it will apply the __Eric Meyer's__ CSS reset.

```html
<Reset>This component has a Eric Meyer's CSS reset applied</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#isolate-your-component)

## ➤ Isolate your component

By setting `isImportant` you enable all CSS reset values to be `!important`. This avoids having any global element styles `leaking` from their parent elements and will fully isolate your component.

```html
<Reset isImportant>This box has all reset values set to `!important`</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#alternative-resets)

## ➤ Alternative resets

You can also use `normalize`, which is another popular CSS reset package.

```html
<Reset use="normalize">This component has Nicolas Gallagher Normalize.css applied</Reset>
```

You can use various popular CSS reset base styles. The following CSS reset base styles are available:


| Value         | Description                     | Info                                             |
|---------------|---------------------------------|--------------------------------------------------|
| **reset**     | Eric Meyer's CSS Reset          | [Website](https://meyerweb.com/eric/tools/css/reset/) |
| **normalize** | Nicolas Gallagher Normalize.css | [website](https://necolas.github.io/normalize.css/) |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#use-your-own-css-reset)

## ➤ Use your own CSS reset

Alternatively you can also use your own custom CSS reset.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#arguments)

## ➤ Arguments


| Attribute       | Type    | Description                                |
|-----------------|---------|--------------------------------------------|
| **use**         | string  | Determine the CSS reset (default = eric)   |
| **isImportant** | boolean | Marks all CSS reset values as `!important` |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#why-not-just-use-all-unset)

## ➤ Why not just use all unset?

Using `all: unset` revert all the styling to its initial value or inherent value, and both of these values can render a component different depending on the browsers.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#global-base-style-cleaners)

## ➤ Global base style cleaners

These CSS resets might be implemented in the future to use with this `Reset` component.

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



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
