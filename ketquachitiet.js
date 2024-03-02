const data = {
    maSinhVien: "B21DCCN111",
    soCauDung: 8,
    tongSoCau: 10,
    danhsach:[
        {
            cauhoi:"Câu 1: Đây là câu hỏi 1?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 3,
            dapAnDung: 3
        },
        {
            cauhoi:"Câu 2: Đây là câu hỏi 2?",
            traloi:[1, 2, 3, 4],
            dapAnNguoiDung: 2,
            dapAnDung: 3
        },
        {
            cauhoi:"Câu 3: Đây là câu hỏi 3?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 1,
            dapAnDung: 1
        },
        {
            cauhoi:"Câu 4: Đây là câu hỏi 4?",
            traloi:[1, 2, 3, 4],
            dapAnNguoiDung: 4,
            dapAnDung: 4
        },
        {
            cauhoi:"Câu 5: Đây là câu hỏi 5?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 1,
            dapAnDung: 1
        },
        {
            cauhoi:"Câu 6: Đây là câu hỏi 6?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 4,
            dapAnDung: 3
        },
        {
            cauhoi:"Câu 7: Đây là câu hỏi 7?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 4,
            dapAnDung: 4
        },
        {
            cauhoi:"Câu 8: Đây là câu hỏi 8?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 3,
            dapAnDung: 3
        },
        {
            cauhoi:"Câu 8: Đây là câu hỏi 8?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 1,
            dapAnDung: 1
        },
        {
            cauhoi:"Câu 9: Đây là câu hỏi 9?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 2,
            dapAnDung: 2
        },
        {
            cauhoi:"Câu 10: Đây là câu hỏi 10?",
            traloi:[1, 3, 4, 2],
            dapAnNguoiDung: 2,
            dapAnDung: 2
        },

    ]
}

const maSinhVien = document.getElementById("ma-sinh-vien")
const soCauDung = document.getElementById("so-cau-dung")
const tongSoCau = document.getElementById("tong-so-cau")
const diemSo = document.getElementById("diem-so")

maSinhVien.textContent = data.maSinhVien
soCauDung.textContent = data.soCauDung
tongSoCau.textContent = data.tongSoCau
diemSo.textContent = Math.round((10 / data.tongSoCau) * data.soCauDung)

function showForm(){
    const danhSachCauHoi = document.querySelector("div.scp-quizzes-main");
    danhSachCauHoi.innerHTML = ``;
    for(const ques of data.danhsach){
        const divEL = document.createElement("div");
        divEL.classList.add("scp-quizzes-data");
        divEL.innerHTML = `
        <h3>${ques.cauhoi}</h3>
        <br/>`
        for(const ans of ques.traloi){
            const divAns = document.createElement("div")
            if(ques.dapAnDung  == ans ){
                divAns.innerHTML = (`<input type="radio" name="question1">
            <label class="correct">${ans}</label> <br />`);
            }
            else if(ques.dapAnNguoiDung == ans && ques.dapAnNguoiDung != ques.dapAnDung){
                divAns.innerHTML =`<input type="radio" name="question1">
            <label class="incorrect">${ans}</label> <br />`
            }else {
                divAns.innerHTML = `<input type="radio" name="question1">
            <label>${ans}</label> <br />`
            }
            divEL.appendChild(divAns)

        }
        danhSachCauHoi.appendChild(divEL);
    }   
};
showForm()