// Start button
function showMessage() {

    alert(
        "Welcome to the Health Awareness Campaign! 💚\n\n" +
        "Learn, stay active, eat healthy and take care of your well-being."
    );
}


// Water Counter
let water = 0;

function drinkWater() {

    water++;

    document.getElementById("waterCount").innerHTML =
        "Glasses today: " + water;

    if (water == 8) {

        alert(
            "Great! You have recorded 8 glasses today. 💧"
        );
    }
}


// Help Information
function helpMessage() {

    document.getElementById("helpText").innerHTML =
        "For an urgent medical situation, contact your local emergency service or seek immediate help from a healthcare professional.";
}


// BMI Calculator
function calculateBMI() {

    let height =
        parseFloat(document.getElementById("height").value);

    let weight =
        parseFloat(document.getElementById("weight").value);

    let result =
        document.getElementById("bmiResult");

    if (
        isNaN(height) ||
        isNaN(weight) ||
        height <= 0 ||
        weight <= 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid height and weight.";

        return;
    }

    let heightMeter = height / 100;

    let bmi =
        weight / (heightMeter * heightMeter);

    bmi = bmi.toFixed(1);

    result.innerHTML =
        "Your BMI is: " + bmi +
        "<br><br>" +
        "BMI is a general screening measure. " +
        "For people under 18, BMI should be interpreted " +
        "using age- and sex-specific growth charts by a healthcare professional.";
}


// Health Quiz
function checkQuiz() {

    let score = 0;

    let q1 = document.querySelector(
        'input[name="q1"]:checked'
    );

    let q2 = document.querySelector(
        'input[name="q2"]:checked'
    );

    let q3 = document.querySelector(
        'input[name="q3"]:checked'
    );

    let q4 = document.querySelector(
        'input[name="q4"]:checked'
    );

    let q5 = document.querySelector(
        'input[name="q5"]:checked'
    );


    if (q1 && q1.value == "water") {
        score++;
    }

    if (q2 && q2.value == "fruits") {
        score++;
    }

    if (q3 && q3.value == "talk") {
        score++;
    }

    if (q4 && q4.value == "walking") {
        score++;
    }

    if (q5 && q5.value == "help") {
        score++;
    }


    let message = "";

    if (score == 5) {

        message = "Excellent! 🎉";

    } else if (score >= 3) {

        message = "Good job! 👍";

    } else {

        message = "Keep learning about healthy habits! 🌱";
    }


    document.getElementById("quizResult").innerHTML =
        "Your Score: " + score + "/5<br>" + message;
}


// Restart Quiz
function resetQuiz() {

    document.getElementById("quizForm").reset();

    document.getElementById("quizResult").innerHTML = "";
}