const loginForm = document.getElementById('login-form-child');
const registerForm = document.getElementById('register-form-child');
const errorMsg = document.getElementById('error-msg');

// Xử lý sự kiện đăng nhập
loginForm.addEventListener('submit', handleLogin);

// Xử lý sự kiện đăng ký
registerForm.addEventListener('submit', handleRegister);

// Kiểm tra tính hợp lệ của thông tin đăng nhập
// Kiểm tra tính hợp lệ của thông tin đăng nhập và xử lý chuyển hướng tương ứng
function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form đi để kiểm tra tính hợp lệ

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Kiểm tra xem email và mật khẩu có đúng với tài khoản "admin" không
    if (email === 'admin@gmail.com' && password === '123456') {
        // Chuyển hướng người dùng đến trang admin.html
        window.location.href = '../admin/main/main.html';
    } else {
        // Chuyển hướng người dùng đến trang index.html cho các tài khoản khác
        window.location.href = '../user/main/index.html';
    }
}


// Kiểm tra tính hợp lệ của thông tin đăng ký
function handleRegister(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form đi để kiểm tra tính hợp lệ

    const email = document.getElementById('register-email').value.trim();
    const classInput = document.getElementById('register-class').value.trim();
    const studentID = document.getElementById('register-student-id').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('register-confirm-password').value.trim();
    
    if (!validateRegister(email, classInput, studentID, password, confirmPassword)) {
        return;
    }

    // Thực hiện đăng ký
    // Example:
    // register(email, classInput, studentID, password);
}

// Hàm kiểm tra tính hợp lệ của thông tin đăng nhập
function validateLogin(email, password) {
    if (email === '' || password === '') {
        alert('Vui lòng nhập đầy đủ thông tin đăng nhập.');
        return false;
    }
    return true;
}

// Hàm kiểm tra tính hợp lệ của thông tin đăng ký
function validateRegister(email, classInput, studentID, password, confirmPassword) {
    if (email === '' || classInput === '' || studentID === '' || password === '' || confirmPassword === '') {
        errorMsg.textContent = 'Vui lòng nhập đầy đủ thông tin đăng ký.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = 'Mật khẩu và xác nhận mật khẩu không khớp.';
        return false;
    }

    errorMsg.textContent = ''; // Xóa thông báo lỗi nếu thông tin hợp lệ
    return true;
}
