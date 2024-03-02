let timer;
let timeRemaining = 600; // 10 minutes in seconds
let currentQuestionIndex = 0;
const questions = [
    {
        question: "Câu hỏi 1: Đây là câu hỏi đầu tiên?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 2: Đây là câu hỏi thứ hai?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 3: Đây là câu hỏi thứ ba?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 4: Đây là câu hỏi thứ tư?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 5: Đây là câu hỏi thứ năm?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 6: Đây là câu hỏi thứ sáu?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 7: Đây là câu hỏi thứ bảy?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 8: Đây là câu hỏi thứ tám?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 9: Đây là câu hỏi thứ chín?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    },
    {
        question: "Câu hỏi 10: Đây là câu hỏi thứ mười?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C"],
    }
    // Thêm các câu hỏi khác vào đây
];

function startTimer() {
    timer = setInterval(function () {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        document.getElementById("time").innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeRemaining === 0) {
            clearInterval(timer);
            alert("Hết giờ!");
            submitQuiz();
        }

        timeRemaining--;
    }, 1000);
}

function displayQuestions() {
    const questionsContainer = document.getElementById("questions-container");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<h2>${question.question}</h2><ul id="choices-${index}"></ul>`;
        questionsContainer.appendChild(questionDiv);

        const choicesList = document.getElementById(`choices-${index}`);
        question.choices.forEach((choice, choiceIndex) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<input type="radio" name="q${index}" value="${choiceIndex}"> ${choice}`;
            choicesList.appendChild(listItem);
        });
    });
}

function submitQuiz() {
    clearInterval(timer);
    alert("Bài của bạn đã được gửi!");
    // Xử lý logic nộp bài ở đây nếu cần
}

document.addEventListener("DOMContentLoaded", function () {
    displayQuestions();
    startTimer();
});