// Dữ liệu mẫu về các kỳ thi
var exams = [
  { name: "luyện tập", status: "free", link: "trangBaiThi.html" },
  { name: "thi thử", status: "free" }
  { name: "giữa kỳ", status: "timed" },
  { name: "cuối kỳ", status: "timed" },
];

// Hiển thị danh sách kỳ thi
function displayExams() {
  var examsList = document.getElementById("exams-list");
  examsList.innerHTML = "";

  for (var i = 0; i < exams.length; i++) {
    var exam = exams[i];
    var listItem = document.createElement("li");
    listItem.textContent = exam.name;
    listItem.setAttribute("data-status", exam.status);
    listItem.setAttribute("data-link", exam.link);
    listItem.addEventListener("click", startExam);
    examsList.appendChild(listItem);
  }
}

// Tìm kiếm kỳ thi
function searchExams() {
  var searchInput = document.getElementById("search-input");
  var keyword = searchInput.value.toLowerCase();
  var examsList = document.getElementById("exams-list");
  var examItems = examsList.getElementsByTagName("li");

  for (var i = 0; i < examItems.length; i++) {
    var examItem = examItems[i];
    var examName = examItem.textContent.toLowerCase();

    if (examName.includes(keyword)) {
      examItem.style.display = "block";
    } else {
      examItem.style.display = "none";
    }
  }
}

// Lọc kỳ thi theo trạng thái
function filterExams() {
  var statusFilter = document.getElementById("status-filter");
  var selectedStatus = statusFilter.value;
  var examsList = document.getElementById("exams-list");
  var examItems = examsList.getElementsByTagName("li");

  for (var i = 0; i < examItems.length; i++) {
    var examItem = examItems[i];
    var examStatus = examItem.getAttribute("data-status");

    if (selectedStatus === "all" || selectedStatus === examStatus) {
      examItem.style.display = "block";
    } else {
      examItem.style.display = "none";
    }
  }
}

// Bắt đầu làm bài thi
function startExam(event) {
  var examLink = event.target.getAttribute("data-link");
  
  // Chuyển hướng đến trang mới
  window.location.href = examLink;
}

// Gắn các sự kiện cho các phần tử tương ứng
document.getElementById("search-input").addEventListener("input", searchExams);
document.getElementById("status-filter").addEventListener("change", filterExams);