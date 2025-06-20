# Object Oriented Programming

1. History of programming
   - Machine Language (0/1)
   - Assembly Level Language (Mnemonics, english words)
   - Procedural Programming (not for complex problems)
   - OOP

2. Why OOP ?
   - real world modelling & complex problems
   - data security
   - scalable & reusable
   - Procedural vs OOP
   - Object-Oriented Design (OOD)

3. `Class` (special/custom type)
   - blueprint for creating objects, defines structure and behavior
   - attribute - variable bound to an object or class that stores data/state
   - class/static attributes
     - declared at the top level of a class definition
     - shared between instances
     - not recommended, similar to global attributes
   - instance attributes
     - declared in the constructor
     - unique per object
   - `Interface` - contract, only method signatures, no implementation
   - `abstract` class - partial implementation + contract, can’t be instantiated
   - concrete class - full implementation
   - relationships
     - Association (uses-a, pass as args)  
       - 💔 Affair → A girl uses a boy (temporary, no ownership)
     - Aggregation (has-a, inject externally)  
       - 🎒 CR collects → He has classmates' books (owns reference, not lifecycle)
     - Composition (has-a & dependent, instantiate/compose inside)  
       - 🧪 Molecule-Atom → A molecule is composed of atoms (atoms born/die with molecule)
   - (DI) dependency injection = you receive the dependency (constructor, setter & interface injection)
   - Composition = you create the dependency

4. Objects (instance of a class, with its own data and access to class methods)
   - instance - distinct identity of the object
   - characteristics - state/data (attributes)
   - behaviour - methods/functions
   - interaction - msgs btw objs
   - identity - uniquely identifiable

5. Modifiers (control access, behaviour, scope)
   - `virtual` - allows child class to override the method
   - `static` - belong to the class not object, accessed via `ClassName.X`, not `self/this.X`
   - `final` - prevents method override or class inheritance
   - `private` - accessible only within the class
   - `protected` - accessible within the class and subclasses
   - `public` - accessible from anywhere
   - `_` - internal use, convention only (not enforced)
   - `__` - triggers **name mangling** to avoid accidental override

6. Methods (function inside in a class and called on its objects)
   - bound methods
     - auto receives the instance (`this`/`self`)
     - can access & modify instance attributes
   - `this`/`self`
     - reference to the current object
     - allows access to object's own data & methods
   - unbound/static methods
     - don't receive instance & can't access instance attributes directly
     - used as utility/helper

7. Constructor (special method called when an object is created)
   - default (`__init__()` or `constructor()` or `className()`)
     - takes no args (besides instance)
     - creates obj with default values
   - parameterised - accepts args to init values at creation
   - named - allows multiple constructor with different names
   - destructor - called when obj is about to be destroyed (`__del__()` or `~ClassName()`)
   - `super()` - calls parent class constructor
   - `__new__` - creates obj before mem allocation (for immutables)
   - garbage collection
     - auto mem mgmt, removes obj no longer referenced
     - JS - mark-and-sweep, Python - reference counting + cyclic GC

8. Encapsulation (hiding internal complexity - organization > security)
   - black box (class) - state (attributes) & behaviour (methods)
   - controlled access
     - getter & setter methods
     - validation, logging & transformation of data before access/modify
   - protection (not full security)
     - prevent external code to directly modify internal data
     - use public methods to interact
   - Encapsulation !== Security -> clean interfaces, not making things truly private

9. Abstraction (handle complexity by hiding unnecessary details)
   - "what", not "how" using interface & abstract class
   - creating a simple interface for complex behavior
   - data hiding - interact only through defined methods

10. Inheritance  (tree-like hierarchy)
    - allows a **child** class, to inherit properties and methods from **parent** class
    - types - single parent, multiple parent, multi-level, hybrid
    - `super()` - refers to the parent class & used to call its methods or constructors
    - when to inherit
      - a good child class is a strict/proper subset of its parent class
      - avoid if the child only shares behavior, not identity
    - wide, not deep - too many levels make it hard/complex to understand
    - Prefer composition over inheritance when “has-a” is better than “is-a”
      - Composition - reuse functionality by having an object, not being one
      - **"has-a" (composition)** is more flexible than **"is-a" (inheritance)**
    - Covariant return types - overridden method can return a **more specific** type

11. Polymorphism (multiple forms, duck typing)
    - same method name can behave differently based on the object
    - Function/Method Signatures - includes the name, inputs, and outputs of a function or method
    - ability to present the same interface (function/method signatures) for many different underlying forms (data types)
    - Static Polymorphism  - Method overloading (compile-time, same method name, different parameters)
    - Dynamic Polymorphism - Method overriding  (rutime, subclass modifies behavior of parent method)
      - Dynamic Dispatch - actual method call is resolved at runtime
        - enabled by Name Virtual Table (vtable)
          - behind-the-scenes mechanism for dynamic method lookup
          - stores pointers to overridden methods
    - operator overloading - redefine built-in operators for custom types

## Short

- OOP -
- Class: Blueprint
- Attribute:
- Static/Class Attributes:
- Instance Attributes:
- Interface:
- Abstract Class:
- Concrete Class:
- Association:
- Aggregation:
- Composition:
- Dependency Injection:
- Instance:
- Object: Instance
- Bound Methods:
- Unbound Methods:
- Unbound/Static Methods:
- Constructor:
- Destructor:
- Garbage Collection:
- Encapsulation: Black box
- Controlled access:
- Abstraction: Hide details
- Data Hiding:
- Inheritance: Parent → Child
- Multiple Inheritance:
- Multi-level Inheritance:
- Covariant Return Types:
- Polymorphism: Same function, different forms
- Function/Method Signature:
- Duck Typing:
- Static Polymorphism = Method overloading = Compile-time Polymorphism :
- Dynamic Polymorphism = Method overriding = Runtime Polymorphism
- Dynamic Dispatch:
- Name Virtual Table
- `super()`: proxy of the parent class
- `final`: prevents override/inheritance
- `virtual`:
- `static`:
- `protected`:
- `private`:
- `public`:
- `this`/`self`:
- Name Mangling:

## Full Forms

- NVT : Noun-Verb Technique,  Name Virtual Table
- OOD : Object Oriented Design

## Implementations

- [Python]()
- [C++]()
- [Java]()
- [JS]()
- [TS]()
