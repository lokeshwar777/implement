# Database Management System (DBMS)

1. General
   - Data - Quantitative, Qualitatitve
   - Data -> processing -> Information -> decision making

2. File System vs DB - redundancy, inconsistency

3. DBMS
   - Abstraction
   - 3 Schema Architecture
      - Physical / Internal level (allocation, compression, encryption)
      - Conceptual / Logical level
        - relationship, what data, attributes
        - data models, database languages (DDL,DML)
      - View / External level (view schema, end-user, subschema, security)
   - Views vs Schema vs Instance
   - DB <---> Application (JDBC for Java, ODBC for C++)
   - DBA

4. DB Application Architecture (Tier 1, 2, 3) (client, network, server)

5. ER Diagram (blueprint)
   - [Diagram](https://app.eraser.io/workspace/CJHlQgMPsTzdtbDjFY6L?origin=share)
   - entity, consitency constraints & primary attribute
   - attributes (defines entity set, domain, values, permitted/non-permitted)
     1. simple
     2. complex
     3. single valued
     4. multi valued
     5. derived
     6. NULL value (not applicable, unknown)
   - relationships (association among >= 2 entities)
     - strong entity (primary key) -> strong relation -> strong entity
     - weak entity (not unique) -> weak relation -> strong entity
     - degree of relation
       - unary (employee-[manages])
       - binary (customer-[places]-order)
       - ternary (employee-[works on]-branch,-job)
     - constraints
       - mapping cardinality/cardinality ratio
         1. 1:1 (citizen-aadhaar)
         2. 1:many (citizen-car)
         3. many:1 (courses-professor)
         4. many:many (customer-products)
       - pariticipation constraint (min cardinality constraint)
         - total (loan -> customer, weak entity)
         - partial (customer -> loan)
   - extended/enhanced ER features (inheritance)
     - avoid redundancy
     1. specialisation (▽)
        - top down
        - is-a  
        - splitting
     2. generalisation
        - bottom up
        - reverse of specialisation
     3. attribute inheritance
     4. participant inheritance
     5. aggregation
        - abstaction
        - show relationship among relationships
   - steps to make ER diagrams:
     1. identify entity sets
     2. identify attributes & their types
     3. identify relations & constraints (mapping & participation)
  
6. Relational Model
   - entity == table == relation
   - attributes == columns
   - tuple == row
   - degree = no. of cols
   - cardinality = no. of rows
   - DB Design
     1. ER Model
     2. Relational Model
     3. RDBMS (software implementation of relational model)
   - relation schema
   - keys
     1. Super Key
     2. Candidate Key
     3. Primary Key
     4. Alternate Key
     5. Foreign Key (NULL value allowed)
     6. Composite Key
     7. Compound Key
     8. Surrogate Key
   - referenced/parent relation
   - referencing/child relation
   - integrity constraints
     1. Domain constraint
     2. Entity constraint
     3. Referential constraint
        - insert (can't insert a value in child if it is not present in a parent)
        - delete (can't delete a value in parent if it is present in a child, on delete cascade, on delete NULL)
     4. Key constraint
        - Not NULL
        - unique
        - default
        - check
        - primary key
        - foreign key

7. ER -> Relational Model (!refer notes!)
   - weak & strong entities -> tables/relations
   - handle attributes (composite, multivalued)
   - generalisation & aggregation
   - unary relationship

8. Normalisation
   - Functional dependency
     - types
       1. Trivial (A → B,if B ⊆ A)
       2. Non-Trivial (A → B,if (B ⊈ A) or (A ⋂ B = Φ))
     - rules (Armstrong's axioms)
       1. Reflexive (Y ⊆ X, then X → Y)
       2. Augmentation (X → Y, then XZ → YZ)
       3. Transitive (X → Y, Y → Z, then X → Z)
   - avoid redundancy which causes anomalies (student-branch-HOD all-mix)
     1. Insertion (new student doesn't have a branch)
     2. Deletion (branch gets deleted when only 1 student is present & deleted)
     3. Updation (HOD change)
   - decompose into multiple tables until SRP is followed
   - partial dependency (non-prime can be determined by a part of primary key)
   - Normal forms
     1. 1NF (atomic)
     2. 2NF (1NF, no partial dependency, solves problem = partial prime → non-prime)
     3. 3NF (2NF, no transitivity, solves problem = non-prime → non-prime)
     4. BCNF (3NF, A → B then A is a super key, solves problem = non-prime/prime → prime)

9. Transaction
   - changes (main memory/RAM/buffer -> DB)
   - ACID properties (ensures integrity)
     1. Atomicity (success/rollback(old state recovery in case of fail))
     2. Consistency (~ law of conservation)
     3. Isolation (concurrently executing multiple transactions)
     4. Durability (persistence of changes after transaction even in case of system failure, RMC, logs)
   - [States / Lifecycle Diagram]()
   - Atomicity & Durability Implementatin
     1. Shadow copy scheme
        - commits
     2. Log Based Recovery
        - logging before update
        1. Deferred DB Modification (logs, commit, write)
        2. Immediate DB Modification (old & new values, logs, write, commit , redo for failure)
     3. Checkpoints Based Recovery
   - ACID vs BASE properties

10. Performance Optimisation Techniques
    - Indexing (kind of caching)
      - index file -> base pointer of block (binary search)  
      - data structure, search key
      - reduces search space & disc access
      - increases access speed
      - Methods (diagrams for each)
        1. Primary Indexing / Clustering indexing (sorted datafile so binary search)
           - ideas/schemes (Dense & Sparse index)
           - search key (determines order)
           1. Based on key attribute (sparse, can be primary or non-primary key)
           2. Based on non-key attribute (dense, Clustering Index)
           3. Multi-level Indexing (Primary Level (RAM), Secondary Level (Hard Disk, Data block in Memory))
        2. Secondary Indexing / Non-Clustering indexing (unsorted datafile so linear search)
           - search key (can be key or non-key)
           - dense indexing

11. NoSQL (not only SQL)
    - non-relational
    - structured, unstructured, semi-structured data
    - history
    - NoSQL when compared with SQL (collection of tables)
      - data modelling (flexible schema)
      - scaling
        - vertical (scale-up, single system, upgrade hardware, RAM, CPU, costly)
        - horizontal (scale-out, additional node, load share, cost efficient)
      - why no horizontal scaling in SQL?
        - possible but not practical
        - extremely slow & costly
      - high availability, easy read & update, caching
      - slow insertion & delete
      - redundancy
      - Data to object mapping (not mandatory)
    - when to use
      1. Fast dev
      2. mixed types or huge volume of data
      3. scale-out
    - some NoSQL DBs support ACID transactions
    - relationship establishment is possible
    - types
      1. key-value stores (pairs, Oracle NoSQL)
      2. column-oriented/columnar/wide-column/c-stores (analytics, Cassandra)
      3. document-based (~JSON, ACID, MongoDB)
      4. graph-based stores (data-nodes, edges(relationship), network)

12. Types of DBs
    1. Relational (scalability issues)
    2. Object-oriented datamodelling (handles, objects, methods, inheritance, structured, no tables, complex relations)
    3. NoSQL
    4. Hierarchical (family-tree, file system, parent-child, IBM IMS)
    5. Network (legacy)

13. Clustering / Replica Set
    - redundancy (copies of data)
    - high availability (fault tolerance, load balancing, scaling)
    - layer of abstraction
    - CDN (geographically distributing group of networks)
  
14. Partitioning & Sharding
    - huge vol of data, large no. of req
    - distributed DB
    - DB optimisation
      1. scale-up (hardware++, expensive)
      2. replica-set/clustering (delay in update propogation)
      3. partitioning/scale-out (new nodes, horizontal & vertical)
    - parallelism, availability, performance, cost efficient
    - sharding
      - a technique to implement horizontal partitioning
      - routing layer required
      - partitioning/sharding key
      - re-sharding (handle non-uniformity)

15. DB Design & Scaling patterns
    1. Query Optimisation & Connection Pool Implementation
       - caching non-dynamic data & DB connections
       - introduce DB redundancy
    2. Vertical scaling / scale-up
    3. CQRS
       - write queries to replicas
       - read queries to primary (lag)
    4. Multi Primary Replication
       - distribute write queries to circular nodes
       - config (logical circular ring)
    5. Partitioning Data by Functionality
    6. Horizontal scaling / scale-out
       - sharding
    7. Data Centre Wise Partition

16. CAP Theorem
    - consistency - (data across nodes should be same)
    - availability - (fault tolerance, lag is allowed)
    - partition tolerance - (communication break)
    - CAP all 3 can't exist at a single time
    - CA DBs (single system, no partitioning, not for distributed systems)
    - CP DBs (turn off inconsistent nodes, primary node receives write req, Bank, MongoDB)
    - AP DBs (eventually consistent, Cassandra, DynamoDB)

17. Master-slave architecture
    - name is not used much due to controversy
    - master node (write ops, original, latest, owner, primary)
    - slave node (read ops, replica)
    - replication (asynchronous, sync)
    - master-master (slave gets write ops - never allow or allow & propogate changes)
    - backup, scale-out read ops, availability, reliability, reduce latency, parallelism

## Full Forms

- DBMS : Database Management System
- DDL, DML : Data Definition(create, constraint check), Manipulation(RUD, query) Language
- DBA : Database Administrator
- ER : Entity Relationship
- SRP : Single Responsibility Principle
- BCNF : Boyce-Codd Normal Form
- RMC : Recovery Management Component
- DAO : Data Access Object
- IMS : Information Management System
- CDN : Content Delivery Network
- CQRS : Command Query Responsibility Segregation
- CAP : Consistency Availability Partition Tolerance
- ACID : Atomicity Consistency Isolation Durability
- BASE : Basically Available Soft (state) Eventual (consistency)

## Definitions

- Data -
- Database -
- DBMS -
- Schema -
- Instance -
- Entity - real world object which can be uniquely identified
- Attribute -
- Relationships -
- Specialisation -
- Generalisation -
- Normalisation -
- Functional dependency -
- Partial dependency -

## Reference Pics

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Extended ER (Specialisation + Generalisation)</summary>
  <img src="https://iili.io/3LQshjn.png" alt="Extended ER">
</details>
<details>
  <summary>ER Model of Banking System</summary>
  <img src="https://iili.io/3LZDrPe.png" alt="ER Model of Banking System">
</details>
<details>
  <summary>Facebook ER Diagram</summary>
  <img src="https://iili.io/3LZDgV9.png" alt="Facebook ER Diagram">
</details>
<details>
  <summary>Shadow Copy Scheme</summary>
  <img src="https://iili.io/3mDty4n.png" alt="Shadow Copy Scheme">
</details>
<details>
  <summary>Primary Indexing</summary>
  <img src="https://iili.io/3mDDJYG.png" alt="Primary Indexing">
</details>
<details>
  <summary>CAP Theorem</summary>
  <img src="https://iili.io/3mDDdvf.png" alt="CAP Theorem">
</details>
<!-- markdownlint-enable MD033 -->
