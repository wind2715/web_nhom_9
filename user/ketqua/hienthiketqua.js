const soCauDungEl = document.getElementById("so-cau-dung");
const tongSoCauEl = document.getElementById("tong-so-cau");
const diemSoEl = document.getElementById("diem-so");
const xemChiTietEl = document.getElementById("xem-chi-tiet");
const chiTietEl = document.getElementById("chi-tiet");

// Dữ liệu bài thi
const data = {
    soCauDung: 8,
    tongSoCau: 10,
    danhSachCauHoi: [
        {
            cauHoi: "1",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "2",
            dapAnDung: "B",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "3",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "4",
            dapAnDung: "A",
            dapAnNguoiDung: "B",
        },
        {
            cauHoi: "5",
            dapAnDung: "A",
            dapAnNguoiDung: "C",
        },
        {
            cauHoi: "6",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "7",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "8",
            dapAnDung: "A",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "9",
            dapAnDung: "C",
            dapAnNguoiDung: "C",
        },
        {
            cauHoi: "10",
            dapAnDung: "D",
            dapAnNguoiDung: "D",
        },
        {
            cauHoi: "11",
            dapAnDung: "D",
            dapAnNguoiDung: "D",
        }
        
        // ...
    ],
};

// Hiển thị kết quả
soCauDungEl.textContent = data.soCauDung;
tongSoCauEl.textContent = data.tongSoCau;
diemSoEl.textContent = Math.round((10 / data.tongSoCau) * data.soCauDung);

// Hiển thị chi tiết
// xemChiTietEl.addEventListener("click", () => {
//     chiTietEl.style.display = "block";
//     const danhSachCauHoiEl = chiTietEl.querySelector("table");
//     danhSachCauHoiEl.innerHTML = `            
//                     <tr>
//                         <th>Câu hỏi</th>
//                         <th>Đáp án của bạn</th>
//                         <th>Đáp án đúng</th>
//                     </tr>`;
    
//     for (const cauHoi of data.danhSachCauHoi) {
//         const trEl = document.createElement("tr");
//         trEl.innerHTML = `
//             <td class="cau-hoi">${cauHoi.cauHoi}</td>
//             <td class="dap-an">${cauHoi.dapAnNguoiDung}</td>
//             <td class="dap-an">${cauHoi.dapAnDung}</td>
//             `;

//         if (cauHoi.dapAnNguoiDung === cauHoi.dapAnDung) {
//             trEl.classList.add("dung");
//         } else {
//             trEl.classList.add("sai");
//         }

//         danhSachCauHoiEl.appendChild(trEl);
//     }
// });
function ketqua(){
    chiTietEl.style.display = "block";
    const danhSachCauHoiEl = chiTietEl.querySelector("table");
    danhSachCauHoiEl.innerHTML = `            
                    <tr>
                        <th>Câu hỏi</th>
                        <th>Đáp án của bạn</th>
                        <th>Đáp án đúng</th>
                    </tr>`;
    
    for (const cauHoi of data.danhSachCauHoi) {
        const trEl = document.createElement("tr");
        trEl.innerHTML = `
            <td class="cau-hoi">${cauHoi.cauHoi}</td>
            <td class="dap-an">${cauHoi.dapAnNguoiDung}</td>
            <td class="dap-an">${cauHoi.dapAnDung}</td>
            `;

        if (cauHoi.dapAnNguoiDung === cauHoi.dapAnDung) {
            trEl.classList.add("dung");
        } else {
            trEl.classList.add("sai");
        }

        danhSachCauHoiEl.appendChild(trEl);
    }
};
ketqua();