# HTML Links and Anchor Tags

## Introduction

Links are a fundamental part of the web. They allow us to navigate from one web page to another. They also allow us to link to other resources, such as images, videos, and PDFs.

## HTML Links

HTML links are defined with the `<a>` tag. The `<a>` tag defines a hyperlink, which is used to link from one page to another.

The `<a>` tag has the following syntax:

```html
<a href="url">link text</a>
```

The `href` attribute specifies the URL of the page the link goes to. The link text is the part that will be visible to the user.

The following example shows how to use the `<a>` tag to create a link to the W3Schools home page:

```html
<a href="https://www.w3schools.com">Visit W3Schools.com!</a>
```

## HTML Link Target

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

- `_blank` - Opens the linked document in a new window or tab
- `_self` - Opens the linked document in the same window/tab as it was clicked (this is default)
- `_parent` - Opens the linked document in the parent frame
- `_top` - Opens the linked document in the full body of the window
- `framename` - Opens the linked document in a named frame

The following example shows how to use the target attribute to open the linked page in a new window or tab:

```html
<a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a>
```

## HTML Links with Images

An image can also be used as a link. To do this, simply nest the `<img>` tag inside the `<a>` tag:

```html
<a href="https://www.w3schools.com">
  <img
    src="https://www.w3schools.com/images/w3schools_green.jpg"
    alt="W3Schools.com"
  />
</a>
```

## HTML Anchor

HTML anchors are defined with the `<a>` tag.

The `<a>` tag is used to create a link to another page. The link created with the `<a>` element is not limited to text. It can also be an image or any other HTML element.

The `<a>` tag has the following syntax:

```html
<a name="value">link text</a>
```

The `name` attribute specifies a name for the anchor. The link text is the part that will be visible to the user.

The following example shows how to use the `<a>` tag to create an anchor:

```html
<a name="top"></a>
<p>Some text.</p>
<p>Some more text.</p>
<a href="#top">Go to top</a>
```

## HTML Anchor Target

HTML anchor targets are defined with the `target` attribute.

The `target` attribute specifies where to open the linked document.

The `target` attribute can have one of the following values:

- `_blank` - Opens the linked document in a new window or tab
- `_self` - Opens the linked document in the same window/tab as it was clicked (this is default)
- `_parent` - Opens the linked document in the parent frame


