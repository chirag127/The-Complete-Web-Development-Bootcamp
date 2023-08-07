# SQL Commands: CREATE Table and INSERT Data

SQL (Structured Query Language) provides commands to create database tables and insert data into those tables. This section will explain how to use the CREATE TABLE and INSERT INTO commands in SQL.

## CREATE TABLE Command

The CREATE TABLE command is used to create a new table in a database. It allows you to define the table's structure by specifying the column names, data types, and any constraints on the data. Here's the basic syntax for creating a table:

```sql

CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);

```
## Example:
Let's create a simple table called "Customers" with columns for ID, Name, Age, and Email:



```sql

CREATE TABLE Customers (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Email VARCHAR(100)
);


```

In this example, the table "Customers" has four columns: ID, Name, Age, and Email. The ID column is defined as the primary key, ensuring its uniqueness.

## INSERT INTO Command

The INSERT INTO command is used to add new rows or records to an existing table. It allows you to insert data into specific columns or all columns, depending on your needs. Here's the basic syntax for inserting data:

```sql

INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);



```

Example:

Let's insert a new record into the "Customers" table:

```sql

INSERT INTO Customers (ID, Name, Age, Email)
VALUES (1, 'John Doe', 30, 'john.doe@example.com');

```

In this example, we're adding a new customer with ID 1, name "John Doe," age 30, and email "john.doe@example.com" to the "Customers" table.

These SQL commands are fundamental for creating and managing databases. With the CREATE TABLE command, you can define the structure of your tables, and with the INSERT INTO command, you can populate those tables with data.

Remember to execute SQL commands within a database management system like MySQL, PostgreSQL, or Microsoft SQL Server, as per your setup and requirements.




```