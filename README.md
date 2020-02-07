# Password-Generator
This is a simple password Generator made in Javascript.

This small project was interesting to tackle, it really helped me understand arrays on a deeper level and it helped expand my knowledge on DOM manipulation for how small amount of it is implemented.

Here is the changelog for this project:

1. Initialized values as strings in the javascript. I found that using strings and splitting was probably easier on the long run but it accomplishes the same effect.
2. Initialized variables that select elements in the body of the document, ready for DOM manipulation.
3. Started by defining the parameters inside the function `writePassword()` to return booleans in relation to each parameter that is asked for.
4. created a function called `generatePassword()` and started by using a case-like structure of if statements to add select characters to the randomizer pool 
5. initialized an array called `generation` which stores the user-selected characters.
6. created a for loop to run an amount of times equal to the amount of characters the user selected as the length of their password (made sure that this prompted string is made into an integer via the parseInt() function)
7. created the variable `randomizer` to randomly select individual elements of the `generation` array and then concatinated each element chosen to a new `solution` array
8. Created a reset for the temporary arrays: `generation` and `solution`. Ready for the next generation. 
9. with the `solution` array populated I manipulated the DOM to add every value in the array individually and print out the random password.
10. With the main bulk of the logic complete I started setting the parameters for minimum and maximum characters allowed per password (8 to 128).
11. Added exceptions and validation sections for some more common errors.
12. created a function named `clearText()` to clear the password for the next generation.
13. some formatting changes

Bonus!

14. Created a function called `copyClipboard()` with its relevant event listener and HTML button with its own ID. Added exception past that.

Overall it was very fulfilling to figure this one out. There are a lot of small things that I did as well that might been very small to include in the changelog.