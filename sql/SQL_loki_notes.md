# Structured Query Language (SQL) Notes (only theory)

1. Intro & Basic
   - `*` - wildcard
   - SQL - general purpose, (SQLite, PostgreSQL, MySQL, SQL Server, Oracle, Cockroach)
   - NoSQL - specialised, (MongoDB, Redis, ElasticSearch, Firebase, DynamoDB)
   - table structures
   - SQLite (embedded) vs PostgreSQL (large scale, type checking)

2. Table (plural)
   - create, alter
   - migrations
     - add (DB -> code) safe
     - delete (code -> DB)
     - update *(same time deploy, downtime, copy, aliasing)
     - up - altering/removing/adding/editing
     - down - revert "up" changes
   - data types

3. Contraints
   - `NULL VALUE` - nothing
   - `PRIMARY KEY` - column that uniquely identifies records within a table
   - `FOREIGN KEY` - field in one table that references another table's `PRIMARY KEY`
   - schema - how data is organized within DB, shape
   - relational(relations) vs non-relational(nested, duplicate) DBs

4. CRUD
   - CREATE/POST, READ/GET, UPDATE/PUT, DELETE
   - auto-increment - UUID
   - manual entry, dynamically generated
   - HTTP CRUD DB lifecycle
   - backup strategies - snapshots update, append-only log, soft deletes
   - Object-Relational Mapping (ORMs) instead of straight SQL

5. Queries
   - aliases - `AS`
   - functions - `IFF`
   - views
   - `DISTINCT`
   - `WHERE` applies to all rows
   - logical ops - `AND`, `OR`, `IN`, `NOT`
   - pattern matching - `LIKE` + widcards (`_`, `%`)
   - col `BETWEEN` x `AND` y <=> col `>=` x `AND` col `<=` y
   - Structuring - `LIMIT`, `ORDER BY`
   - Aggregations - `HAVING` applies to grouped rows(`GROUP BY`)
   - Subqueries

6. Normalisation
   - relationships - 1:1, 1:N,
   - N:N - joining table (only identifiers no metadata)
   - rules

7. Joins
   - namespacing on tables - `t1.col1`
   - `INNER` - `A ⋂ B` `ON` condition
   - `LEFT` - `A ⋃ (A ⋂ B)` = `A`
   - `RIGHT` - `(A ⋂ B) ⋃ B` = `B`
   - `FULL` - `A ⋃ B`
   - `OUTER`
   - `CROSS`
   - `JOIN` default (language specific)
   - multiple

8. Performance
   - index - binary tree(faster lookup)
   - multi-column index
   - denormalisation (pre-calculate) - duplicate but easy to retrieve using query, not bug free
   - SQL injection

## Syntax

> NOTE : check for availability in language of your choice (look out for language specific things)

```sql

-- DATA TYPES : data_type = INTEGER | BOOLEAN | TEXT | CHAR | VARCHAR | REAL | BLOB | NULL

-- CONSTRAINTS : constraint = PRIMARY KEY | UNIQUE | NOT NULL | DEFAULT val | CHECK(expr) | FOREIGN KEY

-- AGGREGATIONS : AGG = COUNT, SUM, MIN, MAX, AVG, ROUND

-- TABLE CREATION
CREATE TABLE parent_table (
    field_name data_type constraint, ...
    parent_field INTEGER PRIMARY KEY,
    field1 TEXT NOT NULL,
    field2 INTEGER DEFAULT default_value,
    CHECK(field2 condition)
)

CREATE TABLE child_table (
    field_name data_type constraint, ...
    child_field INTEGER,
    CONSTRAINT fk_parent_table
    FOREIGN KEY (child_field)
    REFERENCES parent_table(parent_field)
    ON DELETE CASCADE 
    ON UPDATE SET NULL
)

-- INSERT VALUES
INSERT INTO table_name (col1, col2, ...) VALUES (val1, val2, ...);
INSERT OR REPLACE INTO table_name (col1, col2, ...) VALUES (val1, val2, ...);

-- ALTER TABLE
ALTER TABLE table_name
RENAME TO new_table_name; -- rename table
RENAME COLUMN old_col to new_col; -- rename column
ADD COLUMN col_name data_type; -- add column
DROP COLUMN col_name; -- delete column

-- UPDATE
UPDATE table_name SET col1 = val1 WHERE condition;

-- DELETE
DELETE FROM table_name WHERE condition;

-- SELECT QUERY
SELECT 
    [DISTINCT],
    col1, col2, ..., | ALL | *,
    AGG(*) | AGG(col),
    IFF(condition, val_if_true, val_if_false) AS alias,
    CASE
        WHEN condition THEN value
        WHEN other_condition THEN other_value
        ELSE default_value
    END AS alias,
    ROW_NUMBER() OVER (PARTITION BY col2 ORDER BY col3) AS rn,
    RANK() OVER (ORDER BY score DESC) AS rank,
FROM 
    table_name AS t1 | (SELECT ...) AS subquery

-- JOINS (multiple)
[INNER | LEFT | RIGHT | FULL OUTER | CROSS] JOIN other_table AS t2
    ON t1.col1 = t2.col1     
[INNER | LEFT | RIGHT | FULL OUTER | CROSS] JOIN other_table AS t3
    ON t1.col2 = t3.col2     

-- FILTERS
WHERE
    col = | <> | != | > | < | >= | <= val
    AND col IS [NOT] NULL
    AND col [NOT] LIKE | GLOB '_val%'  -- % = any chars, _ = one char
    AND col [NOT] BETWEEN val1 AND val2
    AND col [NOT] IN (val1, val2)
    AND [NOT] EXISTS (subquery)

-- GROUPING + FILTERING
GROUP BY 
    col1, col2
HAVING 
    AGG(col) condition

-- ORDERING/SORTING
ORDER BY 
    col1 ASC | DESC, col2 ASC | DESC

-- PAGINATION
LIMIT N OFFSET skip_num
FETCH FIRST N ROWS ONLY
TOP N                  

-- COMBINATIONS / SET OPERATORS
UNION / UNION ALL           
INTERSECT                   
EXCEPT                      

-- SUBQUERIES
SELECT * FROM (
    SELECT col FROM table WHERE ...
) AS sub

-- COMMON TABLE EXPRESSIONS (CTEs)
WITH subquery_name AS (
    SELECT * FROM table WHERE ...
)
SELECT * FROM subquery_name;

-- INDEX
CREATE INDEX idx_name ON table_name(col1, col2);
DROP INDEX idx_name;

-- VIEW
CREATE VIEW view_name AS SELECT ...;
DROP VIEW view_name;

-- TRANSACTION
BEGIN TRANSACTION;
    UPDATE ...;
    DELETE ...;
COMMIT | ROLLBACK;

-- PRAGMA
PRAGMA table_info(table_name);
PRAGMA foreign_keys = ON;
```
