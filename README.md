# TWEETER

## String concatenation and interpolation lightning exercise

### PART 1

1. In main.js, write a function named `tweetConcat` that returns a string.
   The function should have two parameters:

   - one for a programming concept
   - and one for an adjective

1. Using string concatenation, return a string that says:

   "Learning _concept_ in class today. It's really _adjective_."

```
const tweetConcat = ( ? ? ) => {
    ...your awesome code here
};
```

3. Invoke the `tweetConcat` function with the appropriate arguments
   and store the result in a new variable called 'tweet1'

```
const tweet1 = tweetConcat("array methods", "challenging");
```

4. log `tweet1` to the console.

   Console should read:

   "Learning array methods in class today. It's really challengin."

### PART 2

1.  Make a copy of the above function, name it `tweetInterp`,
    and refactor it using string interpolation

2.  Invoke the `tweetInterp` function with the appropriate arguments and store the result in a new variable called `tweet2`

3.  Log `tweet2` to the console

### PART 3

1. Write a function named `tweetCard` that appends an HTML representation of a tweet to the DOM
2. The function should have three parameters:
   - one for a username,
   - one for a twitter handle,
   - and one for a tweet message
3. Using either concatenation or interpolation, the function should build a string of HTML with the following structure:
   - an article element with a class of 'tweet'
   - a div with a class of `tweet__header`,
     - \*\* the username and twitter handle go in this div
     - \*\* wrap the twitter handle in a span tag with a class of 'tweet-handle'
   - a div with a class of `tweet__message`
     - \*\* the message goes in this div
4. The function should get a reference to a DOM element with the ID of `tweet__container`
5. Append the HTML string to the DOM element you just referenced
6. Invoke the `tweetCard` function for `tweet1` and `tweet2`
   - be sure to pass in the additional name and handle arguments for each

```
const tweetCard = () => {
    // starter HTML:

    <article class="">
        <div class="">
        ...NAME GOES HERE
            <span class=""> ...HANDLE GOES HERE </span>
        </div>
        <div class=""> ...MESSAGE GOES HERE </div>
    </article>

    // get reference to DOM element
    // append HTML String to DOM element
};
```

## BONUS CHALLENGE:

### PART 4

1. Write a function named `rageTweet` that returns a string
2. The function should have two parameters:
   - one for a message string,
   - one for a number of exclamation points at the end
3. The function should ensure the message text is converted to ALL CAPS - hint (search string methods)
4. The function should end the message by REPEATING as many exclamation points as indicated by the number being passed in
5. Invoke the `rageTweet` function with the appropriate arguments and store the result in a new variable called `tweet3`
6. Log tweet3 to the console

- For Example:

```
rageTweet("event hubs are melting my brain", 10)
```

- Should return: EVENT HUBS ARE MELTING MY BRAIN!!!!!!!!!!

7. Using `tweetCard`, add `tweet3` to the DOM
