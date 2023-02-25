# What Well Make Stylised Personal Site

To make a stylised personal site, you can follow these steps:

1. Create a new folder called `personal-site-stylised`.
2. Create a new file called `index.html` in the `personal-site-stylised` folder.
3. Add the following code to the `index.html` file:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <link rel="stylesheet" href="styles.css" />
     </head>
     <body>
       <h1>Chirag Singhal</h1>
       <p>Full Stack Web Developer</p>
     </body>
   </html>
   ```

## `<!DOCTYPE>` Declaration

The `<!DOCTYPE>` declaration is an instruction to the web browser about what version of HTML the page is written in.

## `<html>` Element

The `<html>` element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.

## `<head>` Element

The `<head>` element contains meta information about the HTML document. The `<head>` element is a container for all the head elements, including `<title>`, `<style>`, `<base>`, `<link>`, `<meta>`, `<script>`, and `<noscript>`.

## `<link>` Element

The `<link>` element is used to link to external resources. The `<link>` element must have a `rel="stylesheet"` attribute to define it as a CSS document. The `<link>` element must also have a `href` attribute to define the path to the CSS document.

## `href` Attribute

The `href` attribute specifies the URL of the page the link goes to.

## `rel` Attribute

The `rel` attribute specifies the relationship between the current document and the linked document. The following values are supported:

- `alternate` - Defines an alternate style sheet for a document
- `author` - Defines the author of the document
- `bookmark` - Defines a bookmark inside the current document
- `external` - Defines an external resource (most used to link to style sheets)
- `help` - Defines a help document
- `license` - Defines a license document
