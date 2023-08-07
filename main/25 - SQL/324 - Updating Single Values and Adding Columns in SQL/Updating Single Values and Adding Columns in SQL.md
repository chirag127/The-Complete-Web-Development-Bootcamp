# Updating a Single Value and Adding a Column in SQL

SQL (Structured Query Language) provides commands to update data in a database and modify the structure of database tables. This section will explain how to update a single value in a table and how to add a new column to an existing table.

## Updating a Single Value

The UPDATE statement is used to modify existing data in a database table. It allows you to change one or more column values in one or more rows based on specified conditions. Here's the basic syntax for updating a single value:

```sql
UPDATE table_name
SET column_name = new_value
WHERE condition;

```

Example:
Let's update the email of a customer with ID 1 in the "Customers" table:

```sql
UPDATE Customers
SET Email = 'john.doe@example.com'
WHERE ID = 1;


```

In this example, we are updating the email of the customer with ID 1 to 'john.doe@example.com'.

## Adding a New Column
The ALTER TABLE statement is used to add a new column to an existing table. It allows you to modify the structure of the table by adding new columns. Here's the basic syntax for adding a new column:

```sql

ALTER TABLE table_name
ADD column_name datatype;
```

Example:
Let's add a new column called "Phone" to the "Customers" table:

```sql

ALTER TABLE Customers
ADD Phone VARCHAR(15);

```

In this example, we are adding a new column called "Phone" with a datatype of VARCHAR(15) to the "Customers" table.

After adding the new column, you can update its values using the UPDATE statement if required.

These SQL commands are essential for modifying data and table structures in a database. With the UPDATE statement, you can change specific values in a table, and with the ALTER TABLE statement, you can add new columns to adapt to changing data requirements.

Remember to execute SQL commands within a database management system like MySQL, PostgreSQL, or Microsoft SQL Server, as per your setup and requirements.