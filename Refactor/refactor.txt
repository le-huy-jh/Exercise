## What is closure
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## How to use
function speak() {
  var words = 'hi';
  return function logIt() {
    console.log(words);
  }
}

## Why is closure important
Closures are important because they control what is and isn’t in scope in a particular function, along with which variables are shared between sibling functions in the same containing scope. Understanding how variables and functions relate to each other is critical to understanding what’s going on in your code, in both functional and object oriented programming styles.

## Data hiding
Data hiding is the process of protecting the members of the class from unauthorized

## Compare data hiding vs encapsulation
Data hiding focus on securing the data while hiding the complexity of the system. Encapsulation mainly focuses on hiding the complexity of the system. Encapsulation is a way of achieving data hiding.

## Naming JavaScript Variables
-Don’t use names that are too short.
-Global const should always have every letters capitalized and words separte by a _
-When using more than one word in your variable names, always put the adjective to the left.
-Pick a style for names with more than one word, and stick to it. Like camelCase (recommend).
-Function name must always start with a verb
-When you are naming a variable, if it is not a function please name it as a noun or compound noun
-Use active voice
• myFunction.wasCalled() is better than myFunction.hasBeenCalled() 
• createUser() is better than User.create()
• notify() is better than Notifier.doNotification()
-Name predicates and booleans as if they are yes or no questions
• isActive(user) is better than getActiveStatus(user)
• isFirstRun = false; is better than firstRun = false;
-Name event handler like handle... . Ex handleClick

## Read "How to write better code?"
-Comment code
-Consistent name scheme
-Don’t repeat code
-Break down a big task into smaller chunks
-Organize your program into smaller files
-Code refactoring
-Delete unnecessary code
-Readability > Cleverness