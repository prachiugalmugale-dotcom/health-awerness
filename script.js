let water = 0;

const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 })
    : null;

document.querySelectorAll(".reveal").forEach((element) => {
    if (revealObserver) {
        revealObserver.observe(element);
    } else {
        element.classList.add("is-visible");
    }
});

function showMessage() {
    document.querySelector("#tools").scrollIntoView({ behavior: "smooth" });
}

function drinkWater() {
    water = Math.min(water + 1, 8);
    document.getElementById("waterCount").textContent =
        water === 8 ? "Goal reached: 8 glasses today" : "Glasses today: " + water;
    document.getElementById("heroWater").textContent = water;

    document.querySelectorAll(".water-meter span").forEach((bar, index) => {
        bar.classList.toggle("filled", index < water);
    });
}

function helpMessage() {
    document.getElementById("helpText").textContent =
        "For an urgent medical situation, contact your local emergency service or a qualified healthcare professional immediately.";
}

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("bmiResult");

    if (!height || !weight || height <= 0 || weight <= 0) {
        result.textContent = "Please enter a valid height and weight.";
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let category = "a general screening range";

    if (bmi < 18.5) category = "below the typical adult range";
    else if (bmi < 25) category = "within the typical adult range";
    else if (bmi < 30) category = "above the typical adult range";
    else category = "well above the typical adult range";

    result.textContent =
        "Your BMI is " + bmi + ", which is " + category +
        ". BMI is only a screening measure, not a diagnosis.";
}

function checkQuiz() {
    const answers = {
        q1: "water",
        q2: "fruits",
        q3: "talk",
        q4: "walking",
        q5: "help"
    };

    const score = Object.keys(answers).reduce((total, name) => {
        const selected = document.querySelector('input[name="' + name + '"]:checked');
        return total + (selected && selected.value === answers[name] ? 1 : 0);
    }, 0);

    const message = score === 5
        ? "Excellent awareness."
        : score >= 3
            ? "Good progress. Review the missed topics."
            : "Keep learning the basics and try again.";

    document.getElementById("quizResult").textContent =
        "Your score: " + score + "/5. " + message;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("quizResult").textContent = "";
}
