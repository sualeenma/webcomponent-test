# NMA 2024 Web Components Lecture

## Contents

- [Prerequisites](#prerequisites)
- [01. Foundations Of Classes](#01-foundations-of-classes)
- [02. Anatomy Of A Web Component](#02-anatomy-of-a-web-component)
- [03. Dynamic Attributes](#03-dynamic-attributes)
- [04. Slotted Content](#04-slotted-content)
- [05. Styling Patterns](#05-styling-patterns)

## Prerequisites

### Installation

1.  Install `pnpm`

`npm i -g pnpm`

If you don't want to use `npm` you can follow additional installation
methods [here](https://pnpm.io/installation)

2. In the root directory run `pnpm install`

### Getting Started

The repo is broken up into separate lessons. Each lesson has a `start` and `finished` part
that allow you to start from scratch and also view the final code for the lesson. The convention
for running the code for a certain lesson follows: `pnpm run <lesson-number>:<part>`.

**Example**

- `pnpm run 01:start` - Will run the code in the `start` section of the first lesson
- `pnpm run 01:finished` - Will run the code for the `finished` section of the first lesson

## Examples Site

A collection of Web Component examples: [https://mondodavid.github.io/2024-webcomponents-lecture/](https://mondodavid.github.io/2024-webcomponents-lecture/)

## 01. Foundations Of Classes

This lesson covers the basics of creating and using
JS classes to build dry and modular code.

**Links**

- [Classes overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [The 'this' keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [YouTube: Creating a class](https://www.youtube.com/watch?v=HboT8g_QSGc)
- [YouTube: Methods overview](https://www.youtube.com/watch?v=hy-C4NY7A_8)

## 02. Anatomy Of A Web Component

A lot of web component examples show the custom element being built with a `template` tag. In this
lesson we will build the HTML of the web component with only JS. It will cover the basics of how
a web component is structured and how to write your first one.

**Links**

- [Web Components overview](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [Slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
- [In-Depth Video Explanation](https://www.youtube.com/watch?v=hVxZ-te0kio)

## 03. Dynamic Attributes

This lesson convers how to add a sense of `reactivity` to you web components when attributes are
updated on the custom element.

**Links**

- [Observed Attributes](https://dev.to/jwp/web-components-color-span-3dai)

## 04. Slotted Content

Slots can be used as a placholder for flexible markup within a custom element.
You can event nest custom elements within each other. This provides a powerful
pattern for building robust design systems.

**Links**

- [Slots overview](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#adding_flexibility_with_slots)
- [`get` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

## 05. Styling Patterns

While encapsulation is useful to prevent things like style leaks, it can sometimes be confusing
when trying to customize web components especially when using a 3rd party component library. This
lesson covers alternative ways to customize styles to you component.

**Links**

- [CSS custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [`::slotted`](https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted)
- [`::part`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
- [CSS Tricks Article](https://css-tricks.com/styling-a-web-component/)

## Extended Learning

These topics are important to building robust web components, but weren't included or covered in-depth.

- [Lifecycle Methods](https://bignerdranch.com/blog/learn-the-lifecycle-of-a-web-component-by-building-a-custom-element/)
- [Fixing FOUC](https://leoneck.de/blog/fouc-web-components)
