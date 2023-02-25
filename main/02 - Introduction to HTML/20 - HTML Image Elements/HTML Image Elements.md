# HTML Image Elements

HTML images are defined with the `<img>` tag.

## Introduction to HTML Images

An image is a graphic representation of an object. Images are used to make a web page more visually appealing. They can also be used to convey information.

The `<img>` tag is used to define an image. The `<img>` tag has two required attributes:

      * `src` - Specifies the path to the image
      * `alt` - Specifies an alternate text for the image

The following example shows how to use the `<img>` tag to display an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
```

The `src` attribute specifies the path to the image. The `alt` attribute specifies an alternate text for the image, if the image for some reason cannot be displayed.

## HTML Image Size

The `width` and `height` attributes can be used to specify the width and height of an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" width="104" height="142">
```

## HTML Image Alignment

The `align` attribute can be used to specify the alignment of an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" align="left">
```

## HTML Image Borders

The `border` attribute can be used to specify the width of the border around an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" border="5">
```

## HTML Image as a Link

An image can also be used as a link. To do this, simply nest the `<img>` tag inside the `<a>` tag:

```html
<a href="https://www.w3schools.com">
  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
</a>
```

## HTML Image Map

An image map is an image with clickable areas.

An image map is defined with the `<map>` tag. The `<map>` tag is always nested inside the `<img>` tag. Each area inside an image map is defined with the `<area>` tag. The `<area>` tag always has a `shape`, `coords`, and `href` attribute:

      * `shape` - Specifies the shape of the area (circle, rect, poly, default)
      * `coords` - Specifies the coordinates of the area
      * `href` - Specifies the URL of the page the link goes to
      * `alt` - Specifies an alternate text for the area

The following example shows how to use the `<map>` tag to define an image map:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
  <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
    <area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">
</map>

```

## HTML Image Map - Circle

The following example shows how to use the `<area>` tag to define a circle:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
</map>

```

## HTML Image Map - Rectangle

The following example shows how to use the `<area>` tag to define a rectangle:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
</map>

```

## HTML Image Map - Polygon

The following example shows how to use the `<area>` tag to define a polygon:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="poly" coords="50,0,100,0,100,100,50,100,0,100,0,0" alt="Moon" href="moon.htm">
</map>

```

## HTML Image Map - Default

The following example shows how to use the `<area>` tag to define a default area:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="default" alt="W3Schools" href="https://www.w3schools.com/">
</map>

```

## HTML Image Map - Alternate Text

The following example shows how to use the `alt` attribute to specify alternate text for an image map:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="default" alt="W3Schools" href="https://www.w3schools.com/">
</map>

```
