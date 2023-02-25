# Classes vs Ids

## Difference between classes and ids

In CSS, you can use classes and ids to style elements. The difference between classes and ids is that classes can be used on multiple elements, while ids can only be used on one element.

## Classes

Classes are used to style multiple elements. Classes are defined with a dot (`.`) followed by the name of the class. The following is an example of a class:

```css
.red-text {
  color: red;
}
```

## Ids

Ids are used to style a single element. Ids are defined with a hash (`#`) followed by the name of the id. The following is an example of an id:

```css
#red-text {
  color: red;
}
```

## Selectors

There are many different selectors in CSS. The following are the most common selectors:

- Type selector
- Class selector
- Id selector
- Attribute selector
- Descendant selector
- Child selector

### Type Selector

The type selector is used to select all HTML elements of a certain type. The type selector is the name of the HTML element. The following is an example of the type selector:

```css
p {
  color: red;
}
```

### Class Selector

The class selector is used to select all HTML elements with a certain class. The class selector is a dot (`.`) followed by the name of the class. The following is an example of the class selector:

```css
.red-text {
  color: red;
}
```

### Id Selector

The id selector is used to select a single HTML element with a certain id. The id selector is a hash (`#`) followed by the name of the id. The following is an example of the id selector:

```css
#red-text {
  color: red;
}
```

### Attribute Selector

The attribute selector is used to select HTML elements with a certain attribute. The attribute selector is a square bracket (`[]`) followed by the name of the attribute. The following is an example of the attribute selector:

```css
[title] {
  color: red;
}
```

### Descendant Selector

The descendant selector is used to select an element that is a descendant of another element. The descendant selector is a space between the two elements. The following is an example of the descendant selector:

```css
p .red-text {
  color: red;
}
```

### Child Selector

The child selector is used to select an element that is a child of another element. The child selector is a greater than sign (`>`) between the two elements. The following is an example of the child selector:

```css
p > .red-text {
  color: red;
}
```

## Conclusion

Classes and ids are used to style elements in CSS. The difference between classes and ids is that classes can be used on multiple elements while ids can only be used on one element.
