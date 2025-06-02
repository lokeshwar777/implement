# LLD Notes

> LLD = OOP + SOLID + Design Patterns + Modelling + Design Principles (DRY + KISS + YAGNI) + Communication + Trade-offs

1. UML Diagrams
   - Structural (static)
     1. Class Diagram
        - class structure
          - class name
          - characters/variables
          - behaviour/methods
        - association/connection
          1. class association (inheritance,is-a,--▷)
          2. object association (composition,has-a)
             1. simple association (--- or -->)
             2. aggregation (◇--)
             3. composition (◆--)
   - Behavioural (dynamic)
     1. Sequence Diagram
        1. Object
        2. Lifeline
        3. Activation Bar
        4. Messages
           - async & sync
           - create & destroy
           - lost & found
        - alt(if-else), option(if), loop(for)

2. SOLID Principles - Robert C. Martin
   1. SRP (not jack of all trades, but master of 1)
      - a class should have only 1 reason to change / do only 1 thing
      - composition
      - ex:product-printInvoice-saveToDB
   2. OCP (no vertical scaling, only horizontal scaling)
      - a class should be open for extension but close for modification
      - inheritance + abstraction + polymorphism (using abstract classes/interface)
      - ex:DBPersistence(interface) instead of direct saveToDB, saveToFile
   3. LSP (parent properties ko chu na mat)
      - subclasses should be substitutable for their base classes
      - avoid tight coupling
      - do not change client code
      - ex:can't withdraw from FD account so withdrawable & nonWithdrawable
      - rules
        1. Signature rule
           - language independent
           - covariance - narrow(children) classes are allowed but not broader(ancestor)
           1. method argument rule (arg type)
           2. return type rule
           3. exception rule
        2. Property rule
           1. class invariant (-balance, cheat account)
           2. history constraint (always allow withdraw but we can't from FD account)
              - immutable class (final class)
              - immutable class (final method)
        3. Method rule (condition can be weakened but not strengthened)
           1. pre-condition rule (6(admin) & 8(user) length password)
           2. post-condition rule (charge can increase but speed must reduce after brake)
   4. ISP
      - many client specific interfaces are better than a generic interface
      - ex:shape-2d-3d-area-volume
   5. DIP
      - high level module should not depend on low level module but rather both should depend on interface
      - ex:application-persistence-SQLDB,NoSQLDB
   - DIP is solution for OCP
   - ideal but we need to consider the tradeoffs also

3. Design Patterns (20-25)
   - language agnostic
   - flexibility - change (static & dynamic) is the only constant
   - change & time taken should be as minimal as possible
   1. Creational
   2. Structural
   3. Behavioural

4. Miscellaneous
   - Principle of least knowledge

> [Diagram]() Representations for every of the symbol

## Definitions

- Association -
- Inheritance -
- Aggregation -
- Composition -

## Full Forms

- OOD : Object Oriented Design
- SRP : Single Responsibility Principle
- OCP : Open-Close Principle
- LSP : Liskov Substitution Principle
- ISP : Interface Segregation Principle
- DIP : Dependency Injection Principle

## Use Case

- Class Diagram -
- Sequence Diagram -

## Practice diagrams

- [ ] Class Diagram (inheritance + composition + aggregation)
- [ ] Sequence Diagram

## Implementations

- [ ] Google Docs
- [ ] Parking lot
- [ ] Blinkit
- [ ] Tic-Tac-Toe
