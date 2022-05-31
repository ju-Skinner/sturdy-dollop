---
eleventyNavigation:
  key: Input
  parent: Components
layout: layout.njk
title: Input
permalink: components/sage-input/
---
# sage-input

The `sage-input` component can be used in forms to accept data from the user. While the [native HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) supports a wide variety of types of input data and offers different control widgets, depending on the user agent, this component supports only a subset of the types available in the native HTML input element. All officially supported types of `sage-input` are documented here. Other form input widgets either have been implemented as separate components or may eventually be concidered for implementation in the future.

## Examples

### Default

By default, the `sage-input` component is of [type `text`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text).

{% example %}
  <sage-input first="John" middle="Sam" last="Doe" address="Foo" ></sage-input>
{% endexample %}

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description     | Type     | Default     |
| -------- | --------- | --------------- | -------- | ----------- |
| `first`  | `first`   | The first name  | `string` | `undefined` |
| `last`   | `last`    | The last name   | `string` | `undefined` |
| `middle` | `middle`  | The middle name | `string` | `undefined` |


----------------------------------------------


