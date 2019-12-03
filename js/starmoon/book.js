$(document).ready(function () {


});

function DeleteOrder() {
    var r = confirm("確定要刪除此項");
    if (r == true) {
        alert("刪除成功");
    }
}

function RefreshBook() {
    var r = confirm("系統將無法保留先前資料\n若要保留資料，請按取消");
    if (r == true) {
        window.location.reload();
    }
}