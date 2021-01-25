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
* [➤ Arguments](#-arguments)
* [➤ Isolate your component](#-isolate-your-component)
* [➤ Alternative resets](#-alternative-resets)
* [➤ Use your own CSS reset](#-use-your-own-css-reset)
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


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#arguments)

## ➤ Arguments


| Attribute       | Type    | Description                                      |
|-----------------|---------|--------------------------------------------------|
| **use**         | string  | Set the CSS reset (default = __Eric Meyer's__ CSS reset) |
| **isImportant** | boolean | Marks all CSS reset values as `!important`       |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#isolate-your-component)

## ➤ Isolate your component

By setting `isImportant` you enable all CSS reset values to be `!important` inside the `component scope`. This avoids having any global element styles `leaking` from their parent elements and makes it possible to fully isolates your component and its children.

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

Alternatively you can also use your own custom CSS reset. (write more here)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#why-not-just-use-all-unset)

## ➤ Why not just use all unset?

Using `all: unset` revert all the styling to its initial value or inherent value, and both of these values can render a component different depending on the browsers.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#global-base-style-cleaners)

## ➤ Global base style cleaners

These CSS resets might be implemented in the future to use with this `Reset` component.


| Value         | Description                | Info                                             |
|---------------|----------------------------|--------------------------------------------------|
| **yui2**      | Yahoo! CSS Reset (YUI 2)   | [Website](http://yui.github.io/yui2/docs/yui_2.9.0_full/reset/) |
| **yui3**      | Yahoo! CSS Reset (YUI 3)   | [website](https://clarle.github.io/yui3/yui/docs/cssreset/) |
| **undo**      | Tantek’s Undo HTML         | [website](https://cssdeck.com/blog/scripts/undohtml-css-tantek-celik/) |
| **frontline** | Frontline CSS Reset        | [website](https://github.com/Threespot/frontline-css-reset) |
| **modern**    | A Modern CSS Reset         | [website](https://piccalil.li/blog/a-modern-css-reset) |
| **siolon**    | Siolon’s CSS Browser Reset | [website](https://www.siolon.com/blog/browser-reset-css/) |
| **tripoli**   | Tripoli CSS Reset          | [website](https://cssdeck.com/blog/scripts/tripoli-css-reset-david-hellsing) |
| **mini**      | Mini CSS Reset             | [website](https://jgthms.com/minireset.css/)     |
| **doctor**    | HTML5 Doctor Reset         | [website](http://html5doctor.com/html-5-reset-stylesheet/) |
| **clean**     | Cleanslate                 | [website](http://cleanslatecss.com/)             |




[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
