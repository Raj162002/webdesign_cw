document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    const skipButton = document.getElementById('skip-button');
    const submitButton = document.getElementById('submit-button');
    const questionLabel = document.getElementById('Question');
    const questionAnswerInput = document.getElementById('question-answer');
    const heading = document.getElementById('heading');
    
    // Define your question bank
    const questionBank = [{
        heading: "Step 1 Personal Details | Question 1/5",
        number: "1",
        question: "Enter your name: ",

    },
    {
        heading: "Step 1 Personal Details | Question 2/5",
        number: "2",
        question: "Enter surname: "

        
    },
    {
        heading: "Step 1 Personal Details | Question 3/5",
        number: "3",
        question: "Enter username: "
    },
    {
        heading: "Step 1 Personal Details | Question 4/5",
        number: "4",
        question: "Enter password: "

    },
    {
        heading: "Step 1 Personal Details | Question 5/5",
        number: "4",
        question: "Enter password: "
    },

    ];
    
    let currentQuestionIndex = 0;
    
    // Function to set the question
    function setQuestion(index) {
        heading.textContent = questionBank[index].heading;
        questionLabel.textContent = questionBank[index].question;
        questionAnswerInput.value = ''; // Clear input field
    }
    
    // Function to handle submitting the answer
    function submitAnswer() {
        const answer = questionAnswerInput.value;
        let storeObject = new Map;
        // Store the answer 
        let store = storeObject.set(questionBank[currentQuestionIndex].question, answer)
        console.log("User's answer:", answer);
        // Increment the progress bar (assuming each question is worth 33.33%)
        updateProgress();
        // Display the next question or close the modal if all questions have been answered
        currentQuestionIndex++;
        if (currentQuestionIndex < questionBank.length) {
            setQuestion(currentQuestionIndex);
        } else {
            modal.close(); // Close the modal if all questions have been answered
        }
    }
    
    // Function to handle skipping the question
    function skipQuestion() {
        // You can set a default value here if needed
        submitAnswer(); // Submit the default value as an answer
    }
    
    // Event listener for the submit button
    submitButton.addEventListener('click', submitAnswer);
    
    // Event listener for the skip button
    skipButton.addEventListener('click', skipQuestion);
    
    // Function to update the progress bar
    function updateProgress() {
        const progressText = document.querySelector('.progress-text');
        const progressFill = document.querySelector('.progress-fill');
        const percentage = ((currentQuestionIndex + 1) / questionBank.length) * 100;
        progressText.textContent = `${percentage.toFixed(0)}%`;
        progressFill.style.width = `${percentage.toFixed(0)}%`;
    }
    
    // Initialize the first question
    setQuestion(currentQuestionIndex);
});
