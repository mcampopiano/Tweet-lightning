// TODO: PART 1
/*
    1. Write a function named 'tweetConcat' that returns a string:
    The function should have two parameters:
        one for a programming concept,
        and one for an adjective
    Using string concatenation, return a string that says:
    "Learning (...concept) in class today. It's really (...adjective)."
*/

const tweetConcat = (concept, adj) => {
  return "Learning " + concept + " in class today. It's really " + adj + "."
};

/*
    2. Invoke the tweetConcat function with the appropriate arguments
    and store the result in a new variable called 'tweet1'
*/
const tweet1 = tweetConcat("array methods", "challenging");

/*
    3. log tweet1 to the console
    Should show "Learning array methods in class today. It's really challenging." in the console.
*/
console.log(tweet1);

// TODO: PART 2
/*  
    1. Make a copy of the above function, name it 'tweetInterp',
    and refactor it using string interpolation

    2. Invoke the tweetInterp function with the appropriate arguments and store the result in a new variable called 'tweet2'

    3. Log tweet2 to the console
*/
const tweetInterp = (concept, adj) => {
    return `Learning ${concept} in class today. It's really ${adj} `
}
const tweet2 = tweetInterp("Concatenation", "hard")
console.log(tweet2)

// TODO: PART 3
/*
    1. Write a function named 'tweetCard' that appends an HTML representation of a tweet to the DOM
    2. The function should have three parameters:
        one for a username,
        one for a twitter handle,
        and one for a tweet message
    3. Using either concatenation or interpolation, the function should build a string of HTML with the following structure:
        an article element with a class of 'tweet',
        a div with a class of 'tweet__header',
            ** the username and twitter handle go in this div
            ** wrap the twitter handle in a span tag with a class of 'tweet-handle'
        a div with a class of 'tweet__message'
            ** the message goes in this div
    4. The function should get a reference to a DOM element with the ID of 'tweet__container'
    5. Append the HTML string to the DOM element you just referenced
    6. Invoke the tweetCard function for tweet1 and tweet2
        be sure to pass in the additional name and handle arguments for each
*/

const tweetCard = (username, handle, message) => {
    const contentContainer = document.querySelector("#tweet__container")
    contentContainer.innerHTML += `
        <article class="tweet">
        <div class="tweet__header">
        ${username}<span class="tweet-handle">${handle}</span>
        </div>
        <div class="tweet__message">${message}</div>
        </article>`
   
 
}
tweetCard("Mario", "mcamp", tweet1)
tweetCard("Luigi", "lcamp", tweet2 )


// ! BONUS CHALLENGE:
// TODO: PART 4
/*
    1. Write a function named 'rageTweet' that returns a string
    2. The function should have two parameters:
        one for a message string,
        one for a number of exclamation points at the end
    3. The function should ensure the message text is converted to ALL CAPS
    4. The function end the message with as many exclamation points as indicated by the number being passed in
    5. Invoke the rageTweet function with the appropriate arguments and store the result in a new variable called 'tweet3'
    6. Log tweet3 to the console
        For Example: rageTweet("event hubs are melting my brain", 10)
        Should return: EVENT HUBS ARE MELTING MY BRAIN!!!!!!!!!!
*/

const rageTweet = (message, numOfExcitement) => {
    let newString = ""
    for (let i = 0; i < numOfExcitement; i++) {
        
       newString += "!"
       
    }
    const newMessage = message + newString
    return newMessage.toUpperCase()
}
const angryTweet = rageTweet("testing this out", 5)
console.log(angryTweet)