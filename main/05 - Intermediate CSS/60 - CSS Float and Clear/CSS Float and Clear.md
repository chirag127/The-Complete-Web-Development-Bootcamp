# CSS Float and Clear

The `float` and `clear` properties are used for positioning and formatting content e.g. let an image float left to the text in a container.

## CSS Float

The `float` property specifies whether or not a box should float.

```css
img {
  float: left;
}
```

The `float` property can have one of the following values:

- `left` - The element floats to the left of its container
- `right` - The element floats to the right of its container
- `none` - The element does not float (will be displayed just where it occurs in the text). This is default
- `inherit` - The element inherits the float value of its parent

## CSS Clear

The `clear` property specifies what elements can float beside the cleared element and on which side.

```css
div {
  clear: left;
}
```

The `clear` property can have one of the following values:

- `left` - No floating elements allowed on the left side
- `right` - No floating elements allowed on the right side
- `both` - No floating elements allowed on either the left or right side
- `none` - Allows floating elements on both sides (default)

## CSS Float and Clear Example

Compare this snippet from main/5 - Intermediate CSS/60 - CSS Float and Clear/CSS Float and Clear.md:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Float and Clear</title>
    <style>
      img {
        float: left;
      }
      div {
        clear: left;
      }
    </style>
  </head>
  <body>
    <h1>Float and Clear</h1>
    <img
      src="https://cdn.glitch.com/4b4e4b0e-4d4a-4f5b-ba1b-9f9e8b0f7c07%2Fcss3.png?v=1592884588393"
      alt="CSS3"
      width="100"
      height="100"
    />
    <p>
      CSS3 is the latest evolution of the Cascading Style Sheets language and
      aims at extending CSS2.1. It brings a lot of long-awaited novelties, like
      rounded corners, shadows, gradients, transitions or animations, as well as
      new layouts like multi-columns, flexible box or grid layouts.
    </p>
    <div></div>
  </body>
</html>
```

The image will float to the left of its container. The `<div>` element will clear the floating element from the left side.
