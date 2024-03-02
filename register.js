const form = document.getElementById('form');
const username = document.getElementById('username');
const date = document.getElementById('date');
const studentID = document.getElementById('studentID');
const classID = document.getElementById('classID');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const dateValue = date.value.trim();
    const studentIDValue = studentID.value.trim();
    const classIDValue = classID.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    //check username
    if(usernameValue === '') {
        SetforError(username, 'Username cannot be blank')
    }else if(usernameValue.length < 5) {
        SetforError(username, 'Username should be minimim 6 characters')
    }else {
        SetforSuccess(username)
    }
    //--
       //check date
    if(dateValue === '') {
        SetforError(date, 'date of birth cannot be blank')
    }
    else if (!dateRegex.test(dateValue)) {
        SetforError(date, 'Please enter a valid date format (dd/mm/yyyy)');
    } 
    else {
        SetforSuccess(date)
    }

    //check studentID
    if(studentIDValue === '') {
        SetforError(studentID, 'StudentID cannot be blank')
    }else if(studentIDValue.length < 10) {
        SetforError(studentID, 'studentID have 10 characters')
    }else {
        SetforSuccess(studentID)
    }

   //check classID
        if(classIDValue === '') {
            SetforError(classID, 'ClassID cannot be blank')
        }else if(classIDValue.length < 10) {
            SetforError(classID, 'studentID have 12 characters')
        }else {
            SetforSuccess(classID)
        }

    //check email
    if(emailValue === '') {
        SetforError(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)) {
        SetforError(email, 'Email is not valid')
    } else {
        SetforSuccess(email)
    }

    //check password
    if(passwordValue === '') {
        SetforError(password, 'Password cannot be blank')
    }else if(passwordValue.length < 5) {
        SetforError(password, 'Password should be minimim 6 characters')
    }else {
        SetforSuccess(password)
    }
    //--
    

    //check password2
    if(password2Value === '') {
        SetforError(password2, 'Password cannot be blank')
    } else if(password2Value !== passwordValue) {
        SetforError(password2, 'Please type again password')
    } else {
        SetforSuccess(password2)
    }
}

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


function isEmail (email) {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};