var testScore = {   //Khai báo đối tượng testScore để lưu trữ dữ liệu được nhập
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
};


var i = 0;

/**
 * @description Nhập và in dữ liệu ra bảng
 * @param {string} value giá trị được truyền vào các ô input như 'Họ tên, Điểm toán'
 * @returns Hiển thị dữ  liệu đã nhập ra các cột của bảng
 */
function inputScores() {
    var table = document.getElementById("mytable");
    i = table.rows.length - 1;
    i++;
   
    //Gán giá trị đã nhập vào đối tượng 'testScore'
    testScore.name = document.getElementById("nameItem").value;
    testScore.math = document.getElementById("mathScore").value;
    testScore.physical = document.getElementById("physicalScore").value;
    testScore.chemistry = document.getElementById("chemistryScore").value;

    //Thêm hàng và cột rồi gán vào các biến
   
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    //gán 'i' và các phần tử của đối tượng vào các biến cell1,cell2... hiển thị ra html
    cell1.innerHTML = i;
    cell2.innerHTML = testScore.name;
    cell3.innerHTML = testScore.math;
    cell4.innerHTML = testScore.physical;
    cell5.innerHTML = testScore.chemistry;
    cell6.innerHTML = '?';
    cell7.innerHTML = '<input style ="width: 70px" type="checkbox" name="record"></input>' // gán thêm ô checkbox

    //Sau khi gán giá trị đã nhập vào biến, ta xóa trắng các ô input
    document.getElementById("nameItem").value = ' ';
    document.getElementById("mathScore").value = ' ';
    document.getElementById("physicalScore").value = ' ';
    document.getElementById("chemistryScore").value = ' ';

}

/**
 * @description Xóa dòng trong bảng
 * @returns Xóa đi row mà có checkbox được tích và trả lại số thứ tự dòng được sắp sếp lại
 */
function deleteRow() {
    var table = document.getElementById("mytable");
    var checkbox = document.getElementsByName('record') // lấy tất cả các ô checkbox gán vào biến 'checkbox'
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {     //lặp từ phần tử checkbox đầu tiên đến hết, cái nào có 'checked là true'
            table.rows[i + 1].remove();         //thì xóa đi dòng đó
            i--;            //xóa hết 1 lúc tất cả phần tử('i--' dùng để sau khi xóa phần tử đầu tiên,sẽ quay lại xóa phần tử thứ 2(lúc này thành thứ nhất))
        }
    }

    //Sau khi xóa xong, sẽ sắp xếp lại ô STT đúng thứ tự
    for (let n = table.rows.length - 1; n > 0; n--) {
         document.getElementById("mytable").rows[n].cells.item(0).innerHTML = n;
    }

}


/**
 * @description Tính điểm trung bình
 * @param {number} avg biến lưu giá trị tính điểm trung bình
 * @returns Hiển thị kết quả phép tính trung bình lên cột thứ 6(item(5)) trong bảng
 */
function diemTb() {
    var table = document.getElementById("mytable");
    var count = table.rows.length;  //Gán số lượng dòng của bảng vào biến count
    
    for (let i = 1; i < count; i++) {   //lặp qua các dòng trong bảng
        //Mỗi một vòng (1 hàng) lấy giá trị của các cột(item(2),(3),(4)) gán vào các biến 'a,b,c'
        var a = document.getElementById("mytable").rows[i].cells.item(2).innerHTML;
        var b = document.getElementById("mytable").rows[i].cells.item(3).innerHTML;
        var c = document.getElementById("mytable").rows[i].cells.item(4).innerHTML;
        //Chuyển biến 'a,b,c' về kiểu số và tính điểm trung bình
        var avg = ((parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3).toFixed(1);
        //Gán giá trị 'tính tủng bình' hiển thị ra cột của bảng
        document.getElementById("mytable").rows[i].cells.item(5).innerHTML = avg;
    }

}

/**
 * @description Đổi màu đỏ hàng có học sinh giỏi
 * @returns Chuyển màu đỏ chữ của hàng có điểm trung bình >=8
 */
function changeColor() {
    var table = document.getElementById("mytable");
    
    for (let i = 0, row; row = table.rows[i]; i++) {
        if(parseFloat(row.cells[5].innerHTML) >= 8) {table.rows[i].style.color = "red";}
    }
}



