const form = document.getElementById('form');
const studentID = document.getElementById('studentID');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const studentIDValue = studentID.value.trim();
    const passwordValue = password.value.trim(); 
}


    //check studentID
    if(studentIDValue === '') {
        SetforError(studentID, 'StudentID cannot be blank')
    }else if(studentIDValue.length < 10) {
        SetforError(studentID, 'studentID have 10 characters')
    }else {
        SetforSuccess(studentID)
    }
    //--

    //check password
    if(passwordValue === '') {
        SetforError(password, 'Password cannot be blank')
    }else if(passwordValue.length < 5) {
        SetforError(password, 'Password should be minimim 6 characters')
    }else {
        SetforSuccess(password)
    }
    //--
    
function SetforError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function SetforSuccess(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control success';
	small.innerText = message;
}


function redirectToRegister() {
    window.location.href = "register.html"; // Chuyển hướng sang trang đăng ký
}
