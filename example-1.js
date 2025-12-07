/**
 * BTAP TINH LUONG NHAN VIEN
 * * Dau vao: 
 * - Tạo một biến để chứa giá trị lương theo ngày : 100k/ngày
 * - Tạo biến chứa số ngày làm việc của nhân viên
 * - Tạo biến chứa tổng lương của nhân viên(lúc đầu) => gán giá trị bằng 0
 * *Xu ly:
 * - Lấy số ngày làm việc * số lương theo ngày
 * -Gán giá trị của tổng lương
 * *Dau ra: In kết quả lương tổng 
 */

const checkSalary = document.getElementById("checkSalary");
checkSalary.onclick = function () {
    const dailySalary = 100000;
    const workingDay = document.getElementById("workingDay").value * 1;
    // const dailySalary = document.getElementById("dailySalary").value * 1;
    let totalSalary = dailySalary * workingDay;
    const result_1 = "Tong luong nhan vien la: " + totalSalary;

    const pInfo_1 = document.getElementById("pInfo_1");
    pInfo_1.innerHTML = result_1;

    pInfo_1.classList.add("info");
}


/**
 * TÍNH GIÁ TRỊ TRUNG BÌNH CỦA NĂM SỐ
 * * Đầu vào:
 * - Tạo biến number_1 chứa số thứ nhất
 * - Tạo biến number_2 chứa số thứ hai
 * - Tạo biến number_3 chứa số thứ ba
 * - Tạo biến number_4 chứa số thứ 4
 * - Tạo biến number_5 chứa số thứ 5
 * - Tạo averageNumber chứa gía trị TB : gán 0
 * * Xử lý:
 * -Tính tổng 5 số
 * -Tính giá trị trung bình 5 số
 * -Gán giá trị trung bình
 * - Tạo result chứa kết quả
 * * Đầu ra: In kết quả tb 5số
 */
const checkAvg = document.getElementById("checkAvg");
checkAvg.onclick = function () {
    const number_1 = document.getElementById("number_1").value * 1;
    const number_2 = document.getElementById("number_2").value * 1;
    const number_3 = document.getElementById("number_3").value * 1;
    const number_4 = document.getElementById("number_4").value * 1;
    const number_5 = document.getElementById("number_5").value * 1;
    let averageNumber = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;

    const result_2 = "Gia tri trung binh cua 5 so : " + averageNumber;
    const pInfo_2 = document.getElementById("pInfo_2");
    pInfo_2.innerHTML = result_2;

    pInfo_2.classList.add("info");
}

/**
 * Qui đổi tiền
 * - Đầu vào :
 * + Tạo biến giá USD : 23500 VND
 * + Tạo biến chứa số tiền USD cần được quy đổi
 * -Xử lý:
 * + Số tiền USD được nhâp * biến giá USD (23.500)
 * + Gán kết quả vào giá trị
 * + Tạo result chứa kết quả
 * -Đầu ra: In ra kết quả
 */

const checkTrans = document.getElementById("checkTrans");
checkTrans.onclick = function () {
    const number_6 = document.getElementById("number_6").value * 1;
    const number_7 = document.getElementById("number_7").value * 1;

    let convert = number_6 * number_7;

    const result_3 = "So tien duoc quy doi ra la: " + convert + " VND";
    const pInfo_3 = document.getElementById("pInfo_3");
    pInfo_3.innerHTML = result_3;

    pInfo_3.classList.add("info");
}

/**
 * Tính diện tích, chu vi hình chữ nhật
 * * Đầu vào :
 * -Tạo biến chiều dài và chiều rộng
 * - DOM đến hai biến đó lấy giá trị
 * *Xử Lý:
 * - Tạo biến tính diện tích : dài * rộng
 * - Tạo biến tính chu vi : ( dài + rông)*2
 * - Tạo result chứa kết quả
 * 
 * * Đầu ra: In kết quả ra màn hình
 */
const checkRectangle = document.getElementById("checkRectangle");
checkRectangle.onclick = function () {
    const chieuDai = document.getElementById("chieuDai").value * 1;
    const chieuRong = document.getElementById("chieuRong").value * 1;

    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2;

    const result_4 = "HCN co dien tich la : " + dienTich + "cm  va chu vi la : " + chuVi + " cm";
    const pInfo_4 = document.getElementById("pInfo_4");
    pInfo_4.innerHTML = result_4;

    pInfo_4.classList.add("info");
}

/**
 * Tính tổng 2 ký số
 * * Đầu vào:
 * - Tạo biến chứa số 2 chữ số được nhập vào
 * * Xử lý:
 * - Lấy hàng đơn vị:
 * - Lấy hàng chục : 
 * - Gán cho 2 số hai giá trị
 * - Tạo result chứa biến kết quả
 * *Đầu ra: In ra kết quả ra màn hình.
 */

const checkDigits = document.getElementById("checkDigits");
checkDigits.onclick = function () {
    const kiSoNhap = document.getElementById("kiSoNhap").value * 1;

    let convert_1 = kiSoNhap % 10;
    let convert_2 = Math.floor(kiSoNhap / 10);
    let sumDigits = convert_1 + convert_2;
    const result_5 = "Tong hai ki so vua nhap la : " + convert_1 + " + " + convert_2 + " = " + sumDigits;
    const pInfo_5 = document.getElementById("pInfo_5");
    pInfo_5.innerHTML = result_5;

    pInfo_5.classList.add("info");
}