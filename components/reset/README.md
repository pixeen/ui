<!-- ⚠️ This README has been generated from the file(s) "./../../blueprint.md" ⚠️-->
<h1 align="center">@pixeen/reset</h1>

<p align="center">
    <img src="https://img.shields.io/npm/v/@pixeen/reset?style=flat-square?label=VERSION" alt="NPM version</a>">
    <img src="https://img.shields.io/bundlephobia/minzip/@pixeen/reset?label=SIZE&style=flat-square" alt="NPM size</a>">
    <img src="https://img.shields.io/npm/types/@pixeen/reset?style=flat-square&label=WITH" alt="NPM types</a>">
    <img src="https://img.shields.io/npm/l/@pixeen/reset?label=LICENSE&style=flat-square" alt="NPM license</a>">
</p>

<p align="center">
  <b>[WIP] Component Level CSS Reset – Cleaning your CSS basement.</b></br>
  <sub><sub>
</p>

<br />



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Getting Started](#-getting-started)
* [➤ Introduction](#-introduction)
* [➤ Default usage](#-default-usage)
* [➤ Arguments](#-arguments)
* [➤ Isolate your component](#-isolate-your-component)
* [➤ Further isolate your component](#-further-isolate-your-component)
* [➤ Alternative element styles](#-alternative-element-styles)
* [➤ Bring your own element styles](#-bring-your-own-element-styles)
* [➤ Why not just use all unset?](#-why-not-just-use-all-unset)
* [➤ Why not just iframes?](#-why-not-just-iframes)
* [➤ Global base style cleaners](#-global-base-style-cleaners)
* [➤ License](#-license)


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


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#introduction)

## ➤ Introduction

**Cleaning your CSS base elements helps to ensure predictability and consistency in the way browsers render your components.**

Usually a reset of the CSS base elements is done in the `global scope` by loading CSS cleaners such as `reset` or `normalize`.

However, sometimes you don't have full control off the environment where your components run. This can lead to situations where the `global scope` styles are 'bleeding' into your component.

This is a very small [ReactJS](https://reactjs.org/) component where you can define new CSS base elements on a `component scope`, where a traditional the base elements should be cleaned on a `global scope`.

Cleaning base element styles on a `component scope` is very useful for stand-alone components such as widgets, or other cases where you don't have full control over the environment it runs.

This component will only apply defined element styles to itself + all of its child components. It will not fully prevent you from unwillingly getting element styles from the parent component. You can protect your component from that by providing [the `isImportant` attribute](#-isolate-your-component). There is also the `isVeryImportant` which will reset all possible CSS styles but it comes with a cost.

❗ If you actually have control over your projects global styles, it's probably a better idea to clean on a `global scope` instead. Here's a list of the most popular global [CSS base element cleaners](#-global-base-style-cleaners) available.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#default-usage)

## ➤ Default usage

By default, it will apply the __Eric Meyer's__ CSS reset.

```html
<Reset>This component has a Eric Meyer's CSS reset applied</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#arguments)

## ➤ Arguments


| Attribute           | Type    | Description                                      |
|---------------------|---------|--------------------------------------------------|
| **use**             | string  | Set the CSS reset (default = __Eric Meyer's__ CSS reset) |
| **isImportant**     | boolean | Marks all CSS reset values as `!important`       |
| **isVeryImportant** | boolean | Reset and mark ALL possible CSS values as `!important` |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#isolate-your-component)

## ➤ Isolate your component

By setting `isImportant` you enable all CSS reset values to be `!important` inside the `component scope`. This avoids having any global element styles `leaking` from their parent elements and makes it possible to fully isolates your component and its children.

```html
<Reset isImportant>This sets reset values to `!important`</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#further-isolate-your-component)

## ➤ Further isolate your component

In some cases you might just want to avoid `all possible` elements leak into your component. With the `isIsolated` argument you can reset all possible CSS leakage.

**There are two downsides to this approach:**

1. comes with a price in terms of CSS file-size (@todo calculate).
2. You can't bring your own `preset`, this will clean + set `!important for ALL possible CSS styles.

```html
<Reset isVeryImportant>This cleans ALL the CSS styles</Reset>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#alternative-element-styles)

## ➤ Alternative element styles

You can also use `normalize`, which is another popular CSS reset package.

```html
<Reset use="normalize">This component has Nicolas Gallagher Normalize.css applied</Reset>
```

It's possible to use the `isImportant` attribute for any given base style.

```html
<Reset use="modern" isImportant>This component has Nicolas Gallagher Normalize.css applied and marked as `!important`</Reset>
```

You can use various other popular CSS reset base styles. The following CSS reset base styles are available:


| Short         | Long                            | Info                                             |
|---------------|---------------------------------|--------------------------------------------------|
| **reset**     | Eric Meyer's CSS Reset          | [Website](https://meyerweb.com/eric/tools/css/reset/) |
| **normalize** | Nicolas Gallagher Normalize.css | [website](https://necolas.github.io/normalize.css/) |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#bring-your-own-element-styles)

## ➤ Bring your own element styles

Alternatively you can also use your own custom CSS reset.

```
<CustomReset use="../path/to/elements.css">This has a custom reset</CustomReset>
```

It's possible to set the `isImportant` argument for your own custom reset. This will make all your element styles to be `!important`.

It's not possible to set the `


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#why-not-just-use-all-unset)

## ➤ Why not just use all unset?

Using `all: unset` revert all the styling to its initial value or inherent value, and both of these values can render a component different depending on the browsers.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#why-not-just-iframes)

## ➤ Why not just iframes?

Frames are a way to achieve certain effects and/or solve certain problems in web design. Frames have some compelling advantages, but they also have some serious disadvantages. [The pros and cons of frames](https://www.mediacollege.com/internet/html/frames/pros-cons.html) is a somewhat subjective topic and this page reflects the opinions of the author, Dave Owen. Other people may have differing opinions.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#global-base-style-cleaners)

## ➤ Global base style cleaners

These CSS resets might be implemented in the future to use with this `Reset` component.


| Short         | Long                            | Info                                             |
|---------------|---------------------------------|--------------------------------------------------|
| **reset**     | Eric Meyer's CSS Reset          | [Website](https://meyerweb.com/eric/tools/css/reset/) |
| **normalize** | Nicolas Gallagher Normalize.css | [website](https://necolas.github.io/normalize.css/) |
| **yui2**      | Yahoo! CSS Reset (YUI 2)        | [Website](http://yui.github.io/yui2/docs/yui_2.9.0_full/reset/) |
| **yui3**      | Yahoo! CSS Reset (YUI 3)        | [website](https://clarle.github.io/yui3/yui/docs/cssreset/) |
| **undo**      | Tantek’s Undo HTML              | [website](https://cssdeck.com/blog/scripts/undohtml-css-tantek-celik/) |
| **frontline** | Frontline CSS Reset             | [website](https://github.com/Threespot/frontline-css-reset) |
| **modern**    | A Modern CSS Reset              | [website](https://piccalil.li/blog/a-modern-css-reset) |
| **siolon**    | Siolon’s CSS Browser Reset      | [website](https://www.siolon.com/blog/browser-reset-css/) |
| **tripoli**   | Tripoli CSS Reset               | [website](https://cssdeck.com/blog/scripts/tripoli-css-reset-david-hellsing) |
| **mini**      | Mini CSS Reset                  | [website](https://jgthms.com/minireset.css/)     |
| **doctor**    | HTML5 Doctor Reset              | [website](http://html5doctor.com/html-5-reset-stylesheet/) |
| **clean**     | Cleanslate                      | [website](http://cleanslatecss.com/)             |




[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
