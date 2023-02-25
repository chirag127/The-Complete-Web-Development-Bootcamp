# The Dark Art of Centering Elements with CSS

There are many ways to center elements with CSS. In this lesson, we will cover the most common ways to center elements with CSS.

## Centering an Element Horizontally

To center an element horizontally, you need to set the `width` and `margin` properties of the element.

```css
div {
  width: 200px;
  margin: 0 auto;
}
```

## Centering an Element Vertically

To center an element vertically, you need to set the `height` and `margin` properties of the element.

```css
div {
  height: 200px;
  margin: auto 0;
}
```

## Centering an Element Horizontally and Vertically

To center an element horizontally and vertically, you need to set the `width`, `height`, and `margin` properties of the element.

```css
div {
  width: 200px;
  height: 200px;
  margin: auto;
}
```

## Centering an Element Horizontally and Vertically with Flexbox

To center an element horizontally and vertically with Flexbox, you need to set the `display` property to `flex`, and the `justify-content` and `align-items` properties to `center`.

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Centering an Element Horizontally and Vertically with Grid

To center an element horizontally and vertically with Grid, you need to set the `display` property to `grid`, and the `justify-content` and `align-items` properties to `center`.

```css
div {
  display: grid;
  justify-content: center;
  align-items: center;
}
```

## Centering an Element Horizontally and Vertically with CSS Grid and Flexbox

To center an element horizontally and vertically with CSS Grid and Flexbox, you need to set the `display` property to `grid`, and the `justify-content` and `align-items` properties to `center`. Then, set the `display` property of the child element to `flex`, and the `justify-content` and `align-items` properties to `center`.

```css
div {
  display: grid;
  justify-content: center;
  align-items: center;
}

div > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
