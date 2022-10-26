
//BÀI 1
function soNhoNhat(){
    var tong = 0;
    var i = 0;

    while (tong < 10000) {
        i++;
        tong +=i;
    }
    console.log(tong, i)
    document.getElementById("btnSoDuongNhoNhat").innerHTML = i;

}

//BÀI 2

function tinhTong(){
    var soX = Number (document.getElementById("soX").value);
    var soN = Number (document.getElementById("soN").value);
    // console.log(soX, soN);

    var tong = 0;
    var luyThua = 1;

    // debugger;
    for (var i = 1; i<=soN; i++) {
        luyThua = Math.pow(soX,i);
        tong += luyThua;
    }
    // console.log(tong);
    document.getElementById("btnTinhTong").innerHTML = tong;
}
//BÀI 3

function tinhGiaiThua() {
    var soGiaiThua = Number(document.getElementById("soGT").value);

    var tongGiaiThua = 1;
    for (var i = 1; i <= soGiaiThua; i++) {
        tongGiaiThua *= i;
    }
    // console.log(tongGiaiThua);

    document.getElementById("btnGiaiThua").innerHTML = tongGiaiThua;

}
//BÀI 4

function tinhTaoThe(){
    var inDiv = "";
    for (var i = 0; i < 10; i++) {
        if (i % 2 ==0) {
            var div = '<div class="mt-2 alert bg-primary">Div chẵn</div>'
            inDiv+=div;
        }else if (i % 2 != 0) {
            var div = '<div class="mt-2 alert bg-danger">Div lẻ</div>'
            inDiv+=div;
        }
    }
    document.getElementById("taoDiv").innerHTML = inDiv;

}

