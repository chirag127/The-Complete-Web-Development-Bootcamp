# CSS Selectors

There are many Types of CSS Selectors. We will cover all in this section.

## CSS Selectors - Universal Selector

The universal selector is used to select all HTML elements on the page. The universal selector is represented by an asterisk (`*`). The following is an example of the universal selector:

```css
* {
  color: red;
}
```

## CSS Selectors - Type Selector

The type selector is used to select all HTML elements of a certain type. The type selector is the name of the HTML element. The following is an example of the type selector:

```css
p {
  color: red;
}
```

## CSS Selectors - Class Selector

The class selector is used to select all HTML elements with a certain class. The class selector is a dot (`.`) followed by the name of the class. The following is an example of the class selector:

```css
.red-text {
  color: red;
}
```

## CSS Selectors - ID Selector

The id selector is used to select a single HTML element with a certain id. The id selector is a hash (`#`) followed by the name of the id. The following is an example of the id selector:

```css
#red-text {
  color: red;
}
```

## CSS Selectors - Attribute Selector

The attribute selector is used to select HTML elements with a certain attribute. The attribute selector is a square bracket (`[]`) followed by the name of the attribute. The following is an example of the attribute selector:

```css
[title] {
  color: red;
}
```

## CSS Selectors - Descendant Selector

The descendant selector is used to select an element that is a descendant of another element. The descendant selector is a space between the two elements. The following is an example of the descendant selector:

```css
p .red-text {
  color: red;
}
```

## CSS Selectors - Child Selector

The child selector is used to select an element that is a child of another element. The child selector is a greater than sign (`>`) between the two elements. The following is an example of the child selector:

```css
p > .red-text {
  color: red;
}
```

## CSS Selectors - Adjacent Sibling Selector

The adjacent sibling selector is used to select an element that is the next sibling of another element. The adjacent sibling selector is a plus sign (`+`) between the two elements. The following is an example of the adjacent sibling selector:

```css
p + .red-text {
  color: red;
}
```
