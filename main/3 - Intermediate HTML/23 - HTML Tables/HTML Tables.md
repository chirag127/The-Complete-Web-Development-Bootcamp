# HTML Tables

HTML tables are used to display data in a tabular format. They are made up of rows and columns. Each row is made up of table cells, which are the data that is displayed in the table. Each cell can contain any type of HTML content, including other tables.

## Introduction to HTML Tables

An HTML table is defined with the `<table>` tag. Each table row is defined with the `<tr>` tag. A table header is defined with the `<th>` tag. By default, table headings are bold and centered. A table data/cell is defined with the `<td>` tag.

The following example shows a simple HTML table:

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

## HTML Table Headers

The `<th>` element defines a header cell in an HTML table. A header cell can contain bold text or links.

The following example shows a simple HTML table with header cells:

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

## HTML Table Rowspan and Colspan

The `rowspan` attribute can be used on a `<th>` or `<td>` element to make the cell span more than one row.

The `colspan` attribute can be used on a `<th>` or `<td>` element to make the cell span more than one column.

The following example shows a simple HTML table with rowspans and colspans:

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Points</th>
  </tr>
  <tr>
    <td rowspan="2">Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Jackson</td>
    <td>94</td>
    </tr>
    <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
      </tr>
        <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
    </tr>
    <tr>
</table>
```

## HTML Table Caption

The `<caption>` element defines a table caption.

The `<caption>` element must be inserted immediately after the `<table>` element.

The following example shows a simple HTML table with a caption:

```html
<table>
  <caption>Monthly savings</caption>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Points</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

## HTML Table - The `<thead>`, `<tbody>`, and `<tfoot>` Elements

The `<thead>` element groups the header content in an HTML table.

The `<tbody>` element groups the body content in an HTML table.

The `<tfoot>` element groups the footer content in an HTML table.

The following example shows a simple HTML table with the `<thead>`, `<tbody>`, and `<tfoot>` elements:

```html
<table>
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
      <td>144</td>
    </tr>
  </tfoot>
</table>
```

## HTML Table - The `<col>` Element

The `<col>` element specifies column properties for each column within a `<colgroup>` element.

The following example shows a simple HTML table with column properties:

```html
<table>
  <colgroup>
    <col style="background-color:yellow">
    <col style="background-color:lightblue">
    <col style="background-color:lightgreen">
  </colgroup>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Points</th>
    </tr>
    <tr>

    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    </tr>
</table>
```

## HTML Table - The `<colgroup>` Element

The `<colgroup>` element specifies a group of one or more columns in a table for formatting.

The following example shows a simple HTML table with column groups:

```html
<table>
  <colgroup>
    <col span="2" style="background-color:yellow">
    <col style="background-color:lightblue">
    <col style="background-color:lightgreen">
  </colgroup>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Points</th>
    </tr>
    <tr>

    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    </tr>
</table>
```

## HTML Table - The `<table>` Element

The `<table>` element defines an HTML table.

Each table row is defined with a `<tr>` element. Each table header is defined with a `<th>` element. By default, table headings are bold and centered. Each table data/cell is defined with a `<td>` element.

The following example shows a simple HTML table:

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Points</th>
    </tr>
    <tr>

    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    </tr>
</table>
```

## HTML Table - The `<tr>` Element

The `<tr>` element defines a row in an HTML table.

The following example shows a simple HTML table with two rows:

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Points</th>
    </tr>
    <tr>

    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    </tr>
    <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
    </tr>
</table>
```
