
const questions = [
    {
      question: "What is the correct way to declare a variable in JavaScript?" ,
      options: ["var x = 5;",
      "variable x = 5;",
      "int x = 5;",
      "let x = 5;"],
      correctAnswer: 0, 
    },
    {
      question: "Which of the following is a falsy value in JavaScript?",
      options: ["true",
      "1",
      "'false'",
      "null"],
      correctAnswer: 3,
    },
    {
      question: "What does the 'DOM' stand for?",
      options: ["Document Object Model",
      "Data Object Model",
      "Digital Ordinance Model",
      "Document Oriented Model"],
      correctAnswer: 0,
    },
    {
      question: "Which method is used to add a new element at the end of an array?",
      options: ["append()",
      "push()",
      "addToEnd()",
      "insertEnd()"],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the 'return' statement in a function?",
      options: ["To stop the execution of the function",
      "To return a value from the function",
      "To print a message in the console",
      "To declare a variable"],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: [ "const",
      "let",
      "var",
      "final"],
      correctAnswer: 0,
    },
    {
      question:  "What does the 'NaN' stand for?",
      options: ["Not a Number",
      "Negative and Null",
      "Now and Never",
      "No Action Needed"],
      correctAnswer: 0,
    },
    {
      question:  "What is the purpose of the 'typeof' operator in JavaScript?",
      options: ["To check if a variable is defined",
      "To determine the type of a variable",
      "To create a new variable",
      "To concatenate strings"],
      correctAnswer: 1,
    },
    {
      question: "In JavaScript, what is an immediately invoked function expression (IIFE)?",
      options: ["A function that is executed as soon as it is defined",
      "A function that is called with a delay",
      "A function that only works in Internet Explorer",
      "A function that is invoked by another function"],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["To refer to the current function",
      "To refer to the global object",
      "To refer to the calling object",
      "To refer to a specific variable"],
      correctAnswer: 2,
    },
    {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        options: ["To create a new event",
        "To remove an event listener",
        "To add a function to be called when an event occurs",
        "To check if an element has an event"],
        correctAnswer: 2,
      },
      {
        question: "What is the result of the following expression: 3 + '3'?",
        options: ["'33'",
        "6",
        "9",
        "Error"],
        correctAnswer: 0,
      },
      {
        question:  "Which built-in method removes the last element from an array and returns that element?",
        options: ["pop()",
        "remove()",
        "delete()",
        "splice()"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the 'fetch' function in JavaScript?",
        options: ["To fetch data from a database",
        "To fetch resources from a network",
        "To fetch a local file",
        "To fetch a random number"],
        correctAnswer: 1,
      },
      {
        question: "What is the role of the 'break' statement in a switch statement?",
        options: [ "To end the entire switch statement",
        "To skip the current case and move to the next one",
        "To break out of the loop",
        "To stop the execution of the program"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a correct way to write a comment in JavaScript?",
        options: [ "// This is a comment",
        "# This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->"],
        correctAnswer: 0,
      },
      {
        question:  "What is the purpose of the 'localStorage' object in JavaScript?",
        options: ["To store data that will be deleted when the browser is closed",
        "To store data that persists even after the browser is closed",
        "To store data on the server",
        "To store data in a temporary cache"],
        correctAnswer: 1,
      },
      {
        question:  "Which operator is used to check if two values are equal in both value and type?",
        options: [ "==",
        "===",
        "!=",
        "!=="],
        correctAnswer: 1,
      },
      {
        question:  "What is the purpose of the 'map' method in JavaScript?",
        options: ["To create a new array with the results of a provided function on each element",
        "To check if an array includes a certain value",
        "To remove elements from an array",
        "To add elements to the end of an array"],
        correctAnswer: 0,
      },
      {
        question: "What is the role of the 'try', 'catch', and 'finally' blocks in JavaScript?",
        options: ["To define a loop",
        "To handle exceptions and errors",
        "To create a function",
        "To execute a block of code repeatedly"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a method of the Array object in JavaScript that changes the contents of an array by removing or replacing existing elements and/or adding new elements?",
        options: ["splice()",
        "split()",
        "slice()",
        "concat()"],
        correctAnswer: 0,
      },
      {
        question:  "What is the purpose of the 'bind' method in JavaScript?",
        options: ["To bind two variables together",
        "To create a new function with a specified 'this' value",
        "To concatenate two strings",
        "To bind event listeners to HTML elements"],
        correctAnswer: 1,
      },
      {
        question:  "Which of the following is the correct way to write a function expression in JavaScript?",
        options: [ "function myFunction() {}",
        "var myFunction = function() {}",
        "myFunction: function() {}",
        "const myFunction = () => {}"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'call' and 'apply' methods in JavaScript?",
        options: [ "To make a function call asynchronous",
        "To invoke a function with a given 'this' value and arguments",
        "To call a function only if a specific condition is met",
        "To apply a style to an HTML element"],
        correctAnswer: 1,
      },
      {
        question: "In JavaScript, what is a closure?",
        options: ["A way to close a browser window",
        "A function that has access to variables from its outer (enclosing) scope",
        "A way to close an open file",
        "A method to close an array"],
        correctAnswer: 1,
      },
      {
        question:  "What is the purpose of the 'Object.keys()' method in JavaScript?",
        options: ["To retrieve the values of an object",
        "To retrieve the keys of an object",
        "To convert an object to an array",
        "To check if an object has a specific key"],
        correctAnswer: 1,
      },
      {
        question:  "In JavaScript, what is the purpose of the 'strict mode'?",
        options: [ "To enable additional debugging features",
        "To restrict the use of certain features and catch common coding errors",
        "To make the code run faster",
        "To allow for more lenient error handling"],
        correctAnswer: 1,
      },
      {
        question:  "What is the purpose of the 'typeof' operator in JavaScript?",
        options: ["To check if a variable is defined",
        "To determine the type of a variable",
        "To create a new variable",
        "To convert a variable to a different type"],
        correctAnswer: 1,
      },
      {
        question:  "Which method is used to add a new element at the beginning of an array?",
        options: [ "prepend()",
        "addToStart()",
        "shift()",
        "unshift()"],
        correctAnswer: 3,
      },
      {
        question:  "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        options: [ "To parse a JSON string",
        "To convert an object or value to a JSON string",
        "To retrieve values from a JSON string",
        "To check if a string is in JSON format"],
        correctAnswer: 1,
      },
      {
        question:  "Which method is used to remove the last element from an array and return that element?",
        options: ["pop()",
        "remove()",
        "delete()",
        "splice()"],
        correctAnswer: 0,
      },
      {
        question:  "What is the purpose of the 'async' keyword in JavaScript?",
        options: [ "To declare a function as asynchronous",
        "To force a function to run synchronously",
        "To create a new variable",
        "To specify the type of a variable"],
        correctAnswer: 0,
      },
      {
        question:  "How can you check if a variable is an array in JavaScript?",
        options: ["Using the 'isArray()' method",
        "Checking if the variable has a length property",
        "Using the 'isArray' keyword",
        "Comparing the variable to 'Array'"],
        correctAnswer: 0,
      },
      {
        question:  "What is the purpose of the 'setInterval()' function in JavaScript?",
        options: [ "To set the interval between two dates",
        "To execute a function repeatedly at a fixed interval",
        "To set a timeout for a function",
        "To initialize a new date object"],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for exponentiation in JavaScript?",
        options: ["**",
        "^",
        "^^",
        "//"],
        correctAnswer: 0,
      },
      {
        question:  "What is the purpose of the 'querySelector()' method in JavaScript?",
        options: ["To select the first element that matches a specified CSS selector",
        "To select all elements that match a specified CSS selector",
        "To query the browser for information",
        "To query the server for data"],
        correctAnswer: 0,
      },
      {
        question:  "What is the purpose of the 'charAt()' method in JavaScript?",
        options: ["To check if a variable is a character",
        "To return the character at a specified index in a string",
        "To concatenate two strings",
        "To convert a string to lowercase"],
        correctAnswer: 1,
      },
      {
        question:   "What does the term 'callback function' refer to in JavaScript?",
        options: ["A function passed as an argument to another function, to be executed later",
        "A function that calls itself recursively",
        "A function that returns a callback error",
        "A function that handles browser callbacks"],
        correctAnswer: 0,
      },
      {
        question:   "What is the purpose of the 'splice()' method in JavaScript?",
        options: [ "To remove elements from an array and optionally insert new elements in their place",
        "To combine two arrays",
        "To extract a portion of a string",
        "To sort the elements of an array"],
        correctAnswer: 0,
      },
      {
        question:   "Which event is triggered when a user clicks on an HTML element in JavaScript?",
        options: ["onclick",
        "onmouseover",
        "onchange",
        "onsubmit"],
        correctAnswer: 0,
      },
      {
        question:  "What is the purpose of the 'isNaN()' function in JavaScript?",
        options: ["To check if a value is not a number",
        "To check if a variable is undefined",
        "To check if a value is a number",
        "To check if a variable is null"],
        correctAnswer: 0,
      },
      {
        question:  "How can you convert a string to a number in JavaScript?",
        options: ["parseNumber()",
        "convertToNumber()",
        "Number()",
        "toInt()"],
        correctAnswer: 2,
      },
      {
        question:  "What is the purpose of the 'event.preventDefault()' method in JavaScript?",
        options: ["To stop the propagation of an event",
        "To prevent the default action associated with an event",
        "To simulate a default action for an event",
        "To start the default action for an event"],
        correctAnswer: 1,
      },
      {
        question:  "What does the 'spread operator' (...) do in JavaScript?",
        options: ["It merges two arrays into one",
        "It creates a shallow copy of an array or object",
        "It concatenates two strings",
        "It removes elements from an array"],
        correctAnswer: 1,
      },
      {
        question:  "Which statement is used to exit a switch block in JavaScript?",
        options: ["exit;",
        "break;",
        "return;",
        "continue;"],
        correctAnswer: 1,
      },
      {
        question:  "Which of the following is an example of a truthy value in JavaScript?",
        options: [ "null",
        "undefined",
        "0",
        "true"],
        correctAnswer: 3,
      },
      {
        question:  "What is the purpose of the 'Array.isArray()' method in JavaScript?",
        options: [ "To check if an object is an instance of an array",
        "To check if a variable is defined",
        "To check if a value is an array",
        "To create a new array"],
        correctAnswer: 2,
      },
      {
        question:  "What does the 'parseInt()' function in JavaScript do?",
        options: ["It parses a string and returns an integer",
        "It checks if a variable is an integer",
        "It converts a decimal number to an integer",
        "It returns the fractional part of a number"],
        correctAnswer: 0,
      },
      {
        question:  "Which keyword is used to declare a block of code in JavaScript?",
        options: [ "block",
        "code",
        "group",
        "function"],
        correctAnswer: 3,
      },
      {
        question:  "Which operator is used to concatenate strings in JavaScript?",
        options: [ "&&",
        "+",
        "||",
        "**"],
        correctAnswer: 1,
      },
      
      
  ];
  

  
  let currentQuestion = 0;
  let score = 0;
  
  const questionCounter = document.getElementById("question-counter");
  const scoreCounter = document.getElementById("score");
  const questionText = document.getElementById("question-text");
  const options = document.querySelectorAll(".option");
  const nextButton = document.getElementById("next-button");
  const scoreboard = document.querySelector(".scoreboard");
  const finalScore = document.getElementById("final-score");
  const restartButton = document.getElementById("restart-button");
  
  // Get the "Start Quiz" button and quiz container elements
  const startQuizButton = document.getElementById("start-quiz-button");
  const quizContainer = document.querySelector(".quiz-container");
  
  // Add an event listener to start the quiz when the button is clicked
  startQuizButton.addEventListener("click", () => {
    // Hide the start button container
    startQuizButton.parentElement.style.display = "none";
    // Show the quiz container
    quizContainer.style.display = "block";
    // Start the quiz
    loadQuestion();
  });
  
  // Initially disable the "Next" button
  nextButton.disabled = true;
  
  // Variable to track whether an option has been clicked
  let optionClicked = false;
  
  function loadQuestion() {
    if (currentQuestion < questions.length) {
      questionCounter.textContent = `Question ${currentQuestion + 1}/${
        questions.length
      }`;
      questionText.textContent = questions[currentQuestion].question;
  
      options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
        option.style.backgroundColor = "white"; // Reset option background color
        option.style.pointerEvents = "auto"; // Re-enable click events
        option.onclick = function () {
          handleOptionClick(index);
        };
      });
  
      // Re-enable the "Next" button only if an option has been clicked
      nextButton.disabled = !optionClicked;
    } else {
      showScoreboard();
    }
  }
  
  function handleOptionClick(selectedOptionIndex) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;
  
    // Remove click event listeners from all options to prevent multiple clicks
    options.forEach((option) => {
      option.style.pointerEvents = "none";
      option.onclick = null;
    });
  
    if (selectedOptionIndex === correctAnswerIndex) {
      options[selectedOptionIndex].style.backgroundColor = "green";
      score++;
      scoreCounter.textContent = `Score: ${score}`;
    } else {
      options[selectedOptionIndex].style.backgroundColor = "red";
      options[correctAnswerIndex].style.backgroundColor = "green";
    }
  
    optionClicked = true; // Mark an option as clicked
    nextButton.disabled = false;
  }
  
  function showScoreboard() {
    scoreboard.style.display = "block";
    finalScore.textContent = score;
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    optionClicked = false; // Reset optionClicked flag
    nextButton.disabled = true;
    loadQuestion();
  });
  
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    scoreboard.style.display = "none";
    loadQuestion();
    scoreCounter.textContent = "Score: 0";
    optionClicked = false; // Reset optionClicked flag
  });
  
  // Initialize the quiz
  loadQuestion();
  