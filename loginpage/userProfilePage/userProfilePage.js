document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    const skipButton = document.getElementById('skip-button');
    const submitButton = document.getElementById('submit-button');
    const questionLabel = document.getElementById('Question');
    const questionAnswerInput = document.getElementById('question-answer');
    const heading = document.getElementById('heading');
    
   
    const questionBank = [{
        heading: "Step 1 Personal Details | Question 1/3",
        number: "1",
        question: "Enter name: ",
        type: "text"

    },
    {
        heading: "Step 1 Personal Details | Question 2/3",
        number: "2",
        question: "Enter surname: ",
        type: "text"

        
    },
    {
        heading: "Step 1 Personal Details | Question 3/4",
        number: "3",
        question: "Enter age: ",
        type: "text"
    },
    {
        heading: "Step 1 Personal Details | Question 4/4",
        number: "3",
        question: "Enter username: ",
        type: "text"
    },
    {
        heading: "Step 2 Educational qualifications | Question 1/5 ",
        number: "4",
        question: "Areas of study: ",
        type: "text"

    },
    {
        heading: "Step 2 Educational qualifications | Question 2/5",
        number: "5",
        question: "Highest degree: ",
        type: "text" 
    },
    {
        heading:"Step 2 Educational qualifications | Question 3/5",
        number: "6",
        question: "University/Insitution: ",
        type: "text"
    },
    {
        heading: "Step 2 Educational qualifications | Question 4/5",
        number: "7",
        question: "Completion year: ",
        type: "text"
    },
    {
        heading: "Step 2 Educational qualifications | Question 5/5",
        number: "8",
        question: "Country: ",
        type: "text"
    },
    {
        heading: "Step 3 Contact details | Question 1/5",
        number: "9",
        question: "Employee status (if applicable): ",
        type: "text"
    },
    {
        heading: "Step 3 Contact details | Question 2/5",
        number: "10",
        question: "Work place address (if applicable): ",
        type: "text"
    },
    {
        heading: "Step 3 Contact details | Question 3/5",
        number: "11",
        question: "Telephone number: ",
        type: "tel"
    },
    {
        heading: "Step 3 Contact details | Question 4/5",
        number: "12",
        question: "Home address: ",
        type: "text"
    },
    {
        heading: "Step 3 Contact details | Question 5/5",
        number: "13",
        question: "Enter email: ",
        type: "email"
    }

    ];
    
    let currentQuestionIndex = 0;
    
    // Function to set the question
    function setQuestion(index) {
        const currentQuestion = questionBank[index];
        heading.textContent = questionBank[index].heading;
        questionLabel.textContent = questionBank[index].question;
        questionAnswerInput.value = ''; 
        questionAnswerInput.type = currentQuestion.type;
    }
    
    // Function to handle submitting the answer
    function submitAnswer() {
        const answer = questionAnswerInput.value;
        let storeObject = new Map;
        // Store the answer 
        let store = storeObject.set(questionBank[currentQuestionIndex].question, answer)
        console.log("User's answer:", answer);
        // Increment the progress bar 
        updateProgress();
        // Display the next question or close the modal if all questions have been answered
        currentQuestionIndex++;
        if (currentQuestionIndex < questionBank.length) {
            setQuestion(currentQuestionIndex);
        } else {
            modal.close(); 
        }
    }
    
    // Function to handle skipping the question
    function skipQuestion() {
        submitAnswer(); 
    }
    
    // Event listener for the submit button
    submitButton.addEventListener('click', submitAnswer);
    
    // Event listener for the skip button
    skipButton.addEventListener('click', skipQuestion);
    
    // update progress bar
    function updateProgress() {
        const progressText = document.querySelector('.progress-text');
        const progressFill = document.querySelector('.progress-fill');
        const progress = document.querySelector('.progress');
        const userProfileDisplay = document.querySelector('.user-profile-display');
        const percentage = ((currentQuestionIndex + 1) / questionBank.length) * 100;
        progressText.textContent = `${percentage.toFixed(0)}%`;
        progressFill.style.width = `${percentage.toFixed(0)}%`;
        if (progressFill.style.width == "100%"){
            progress.style.display = "none";
            userProfileDisplay.style.display = "block";
        }
    }
    
    // Initialize the first question
    setQuestion(currentQuestionIndex);
});
