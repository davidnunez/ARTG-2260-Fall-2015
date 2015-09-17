# Lecture 2


## Values

### Numbers

#### whole numbers: 1, 2, 1312 

#### fractional numbers (floating point)

        1.3123;  
        1.313748172;

- The computer rounds these numbers to a maximum number of decimal places when doing calculations.

#### Arithmetic

- Operators

	- +, -, *, /, %, - (negation)

		- Modulo `%` gives you the remainder after diving
		          10 % 3; // 1

	- Order of operations
	  		  
	  		  
	  		2 + 3 * 4; // 14  
	  		2 * 3 + 4; // 10  
	  		2 * 3 / 4 + 5;   
	  		(2 + 3) * 4; // 20

		- multiplies and divides first, then adds and subtracts

		- for “ties” computer applies operations left to right

		- parentheses can alter the order of operations and can be hierarchical / nested

#### NaN

### Strings

#### “Strings” are a series of characters that represent text

#### Use double or single quotes. 

        “This is also a string”;  
        ‘This is a string’;  
    

#### Special characters are indicated by a backslash

		“This is a \” quotation mark”;  
		“This is a \n newline”;  
		“This is a \\ backslash”;

- See https://msdn.microsoft.com/en-us/library/2yfce773(v=vs.94).ASPX

#### Concatenating strings.

		“I” + “have” + “a” + “pet” + “iguana”;

### ‘typeof’

### Booleans

#### true/false (or: yes/no, on/off, 0/1, etc)

#### comparisons: ==, !=, <. >, <=, >=

		1 == 1; // true  
		1 == 9; // false  
		1 != 1; //false  
		1 != 9; //true  
		1 < 5; // true  
		5 < 1; false  
		1 >= 0; true  
		1 >= 1; true  
		1 >= 2; false

- NaN != NaN

#### comparisons work on strings too

		“dog” == “dog”; // true  
		“dog” == “iguana” // false			“dog” < “iguana”; // true  
		“rhino” > “iguana”; // true

#### && (and), || (or), ! (not or “opposite”)

		(1 == 1) && (2 == 2); // true  
		(1 == 2) && (2 == 2); // false  
		(1 < 2) || (2 < 1); // true  
		!(1 < 2); // false

- applying these to numbers or strings

#### Order of operations: Arithmetic, comparisons, &&, ||

		1 + 1 == 2 && 10 * 10 > 50

- parenthesis help

#### Ternary Comparison

		true ? “a” : “b”; // “a”  
		false ? “a” : “b”; // “b”

### Null / Undefined

### Type Coercion

#### Javascript tries to make sense of weird things

		console.log(NaN); // NaN (shows up as “null” in console)		console.log(8 * null) // 0  
		console.log(“5” - 1) // 4  
		console.log(“5” + 1) // 51  
		console.log(“five” * 2) // NaN (shows up as “null” in console)  
		console.log(false == 0) // true  
		console.log(“five”) // NaN (shows up as “null” in console)  
		console.log(NaN + 5) // NaN (shows up as “null” in console)  
		console.log(null == undefined); // true  
		console.log(null == 0); // false  
  
		console.log(0 ? ‘true’: ‘false’); // false  
		console.log(‘’ ? ‘true’: ‘false’); // false  
		console.log(NaN ? ‘true’: ‘false’); // false  
		console.log(20 ? ‘true’: ‘false’); // true  
		console.log(“iguana” ? ‘true’: ‘false’); // true

#### ===, !== prevents type coercion

### Logical Operator Short Circuiting

#### left hand is evaluated first; right hand is only evaluated when necessary

	  
		false && “it doesn’t matter”; // false  
  
		true || “it doesn’t matter”; // true

#### || will return left hand side when it is true.. otherwise will return right hand side

		console.log(“iguana” || “dog”); // “iguana”  
		console.log(false || “dog”); // dog

#### && will return left hand side when it is false.. otherwise will return right hand side

## Programs

### Expressions - small snippets of code that produce a valule; like a word or sentence fragment

#### can be nested together into more complex things

### Statements - small combinations of expressions that change the world

#### internal (changes the state of the program

#### external - screen outputs

#### semicolons are sometimes not needed to indicate the end of the statements… can’t hurt to add them

### Programs - are collections of statements

## Internal State… Variables

### names

### declared w/ “var”

### undefined values

#### david is undefined example

### do typeof on a variable

## functions

### typeof console.log

### console.log - side effect

### return values (show Math.max())

### prompt()

## Conditionals

### if, then, else

### switch

## loops (pt 1)

### while(counter < 10000…) add 10

### do (prompt forever)

