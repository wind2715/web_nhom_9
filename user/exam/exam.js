document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.getElementById("question-container");
  const submitButton = document.getElementById("submit-btn");
  const timer = document.getElementById("time");
  const message = document.getElementById("message");
  const questionNumbers = document.getElementById("question-numbers"); // Thêm đối tượng số câu hỏi

  const questions = [
    {
      question: "Câu hỏi 1:",
      choices: ["Lựa chọn 1", "Lựa chọn 2", "Lựa chọn 3", "Lựa chọn 4"],
      correctAnswer: 0,
    },
    {
      question: "Câu hỏi 2:",
      choices: ["Lựa chọn 1", "Lựa chọn 2", "Lựa chọn 3", "Lựa chọn 4"],
      correctAnswer: 1,
    },
    // Thêm các câu hỏi khác ở đây
    {
      question: "Câu hỏi 3:",
      choices: ["Lựa chọn 1", "Lựa chọn 2", "Lựa chọn 3", "Lựa chọn 4"],
      correctAnswer: 2,
    },
    {
      question: "Câu hỏi 4:",
      choices: ["Lựa chọn 1", "Lựa chọn 2", "Lựa chọn 3", "Lựa chọn 4"],
      correctAnswer: 3,
    },
    // Thêm các câu hỏi khác ở đây
  ];

  let timerCount = 600; // 10 phút

  function displayQuestions() {
    questions.forEach((question, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.innerHTML = `
        <p>${question.question}</p>
        <ul>
          ${question.choices
            .map(
              (choice, i) => `
            <li>
              <input type="radio" id="choice${index}-${i}" name="choice${index}" value="${i}">
              <label for="choice${index}-${i}">${choice}</label>
            </li>
          `
            )
            .join("")}
        </ul>
      `;
      questionContainer.appendChild(questionElement);
      // Thêm số câu hỏi vào phần số câu hỏi
      const questionNumber = document.createElement("div");
      questionNumber.classList.add("selected-question");
      questionNumber.textContent = index + 1; // Số câu hỏi bắt đầu từ 1
      questionNumbers.appendChild(questionNumber);

      // Sự kiện chọn câu hỏi
      questionNumber.addEventListener("click", function () {
        // Xóa màu xanh ở tất cả các số câu hỏi
        const allQuestionNumbers =
          document.querySelectorAll(".selected-question");
        allQuestionNumbers.forEach((number) => {
          number.classList.remove("selected");
        });

        // Thêm màu xanh cho số câu hỏi được chọn
        questionNumber.classList.add("selected");
      });
    });
  }

  function startTimer() {
    const countdown = setInterval(function () {
      const minutes = Math.floor(timerCount / 60);
      let seconds = timerCount % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      timer.textContent = `${minutes}:${seconds}`;
      if (timerCount === 0) {
        clearInterval(countdown);
        timer.textContent = "Hết giờ";
        submitButton.disabled = true;
        message.textContent = "Hết giờ! Bạn đã không kịp hoàn thành bài thi.";
      } else if (timerCount <= 60) {
        message.textContent = "Chỉ còn ít phút nữa!";
      }
      timerCount--;
    }, 1000);
  }

  // Khai báo mảng để lưu trữ trạng thái của các câu hỏi đã chọn
  // Khai báo mảng để lưu trữ các div số câu hỏi đã được chọn
  const selectedQuestionDivs = [];

  function submitAnswers() {
    const selectedChoices = [];
    questions.forEach((question, index) => {
      const choices = document.querySelectorAll(
        `input[name='choice${index}']:checked`
      );
      if (choices.length === 0) {
        selectedChoices.push(null);
      } else {
        selectedChoices.push(parseInt(choices[0].value));
        // Lưu trữ div số câu hỏi đã được chọn
        const selectedQuestionNumber = document.querySelector(
          `.selected-question:nth-child(${index + 1})`
        );
        selectedQuestionDivs.push(selectedQuestionNumber);
      }
    });

    // Cập nhật màu xanh cho các div số câu hỏi đã được chọn
    selectedQuestionDivs.forEach((div) => {
      div.classList.add("selected");
    });

    console.log(selectedChoices);
    // Xử lý các câu trả lời đã chọn ở đây

    // Chuyển hướng đến trang hiển thị kết quả sau khi nộp bài
    window.location.href = "../ketqua/hienthiketqua.html";
  }

  displayQuestions();
  startTimer();

  submitButton.addEventListener("click", submitAnswers);
});
