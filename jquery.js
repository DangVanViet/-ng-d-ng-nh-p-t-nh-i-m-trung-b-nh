$(document).ready(function(){   // Khi tài liệu đã sẵn sàng function sẽ callback

    var i = 0;


    /**
     * @description Nhập và in dữ liệu ra bảng
     * @returns Hiển thị dữ  liệu đã nhập ra các cột của bảng
     */
    $('#nhap').click(function(){    // khi click vào nút ấn "Nhập" function sẽ đuợc gọi

        i = $("table tr").length - 1; // kiểm tra bảng có bao nhiêu dòng, gán 'i' = số dòng -1
        i++

        var name = $('#nameItem').val();    // gián giá trị đã nhập từ các ô inputs vào các biến
        var math = $('#mathScore').val();
        var physical = $('#physicalScore').val();
        var chemistry = $('#chemistryScore').val();

        // Nếu các ô input được nhập thì mới thêm được dòng
        if(name != '' && typeof math == 'string' && physical != '' &&
        typeof physical == 'string' && chemistry != '' && typeof chemistry == 'string' )

        // Thêm các cột và dòng chứa các biến đã được gán các giá trị đã nhập
       { $('#mytable').append(`<tr><td>${i}</td><td>${name}</td>
        <td>${math}</td><td>${physical}</td><td>${chemistry}</td><td>?</td>
        <td><input style ="width: 70px" type="checkbox" name="record"></input></td></tr>`);

        //Sau khi gán giá trị đã nhập vào biến, ta xóa trắng các ô input
        $('#nameItem').val("");
        $('#mathScore').val("");
        $('#physicalScore').val("");
        $('#chemistryScore').val("");
       }
       // Nếu chưa nhập hết dữ liệu sẽ hiện hộp thông báo
        else {alert('Bạn phải điền đầy đủ thông tin'); i--}
    });

        /**
     * @description Tính điểm trung bình
     * @returns Hiển thị kết quả phép tính trung bình lên cột thứ 6 trong bảng
     */
    $('#avgCaculate').click(function(){

        $("tbody tr").each(function() { // lặp qua các phần tử hàng
            let a = $(this).children("td").eq(2).html();    //lấy giá trị của các cột
            let b = $(this).children("td").eq(3).html();    //thứ 3,4,5 gán vào biến a,b,c
            let c = $(this).children("td").eq(4).html();
            // Tính trung bình và Gán giá trị 'tính trung bình' hiển thị ra cột của bảng
            var avg = ((parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3).toFixed(1);
            $(this).children("td").eq(5).html(avg);
        });
    });
        /**
     * @description Đổi màu đỏ hàng có học sinh giỏi
     * @returns Chuyển màu đỏ chữ của hàng có điểm trung bình >=8
     */
    $('#goodStudent').click(function(){     //khi click vào nút ấn "xác định học sinh giỏi" function được gọi
        $("tbody tr").each(function(){  //lặp qua các phần tử  hàng của thân bảng
            if(parseFloat($(this).children("td").eq(5).html()) >= 8)
            { $(this).addClass('red');}
        });
    });


        /**
     * @description Xóa dòng trong bảng
     * @returns Xóa đi hàng mà có checkbox được tích và trả lại số thứ tự dòng được sắp sếp lại
     */
    $('#clearrow').click(function(){
        var x = confirm("Bạn có chắc chắn xóa");
        if(x === true) {
            
            //tìm checkbox có name="record" và lặp qua tất cả 
            $("table tbody").find('input[name="record"]').each(function(){
                if($(this).is(":checked")){     //nếu checkbox nào được tic thì xóa hàng
                    $(this).parents("tr").remove();
                }
            });
    
            let  i = 0;
            $("tbody tr").each(function() { //Sau khi xóa hàng sắp xếp lại số tt (cột 1)
                $(this).children("td").eq(0).html(i);
                i++;
            });
        };
    });
});

