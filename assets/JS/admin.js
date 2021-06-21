function toggoleMenu() {
    let menutop1 = document.querySelector('.main-bars');
    let danhmuc = document.querySelector('.danhmuc');
    let main = document.querySelector('.main');
    menutop1.classList.toggle('active');
    danhmuc.classList.toggle('active');
    main.classList.toggle('active');
}

$(document).ready(function() {
    $("#img").click(function() {
        $(".thongtin").fadeToggle();
    });
});


// Tìm Kiếm Sản Phẩm 
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}