# CSS Static and Relative Positioning

The `position` property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

## Static Positioning

The default value. An element with `position: static;` is not positioned in any special way; it is always positioned according to the normal flow of the page. The top, right, bottom, and left properties have no effect.

## Relative Positioning

An element with `position: relative;` is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

Compare this snippet from main/5 - Intermediate CSS/49 - CSS Static and Relative Positioning/CSS Static and Relative Positioning.md:

```css
div {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```

## Absolute Positioning

An element with `position: absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

Compare this snippet from main/5 - Intermediate CSS/49 - CSS Static and Relative Positioning/CSS Static and Relative Positioning.md:

```css
div {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  border: 3px solid #73AD21;
}
```

## Fixed Positioning

An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. A fixed element does not leave a gap in the page where it would normally have been located.

Compare this snippet from main/5 - Intermediate CSS/49 - CSS Static and Relative Positioning/CSS Static and Relative Positioning.md:

```css
div {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```

## Sticky Positioning

An element with `position: sticky;` is positioned based on the user's scroll position.

Sticky positioning is useful when you want to create elements that are stuck to the top or bottom of the viewport, but only after you have scrolled to a certain point.
