function fuck() {
    var Name = $("#Name").val();
    var age = $("#age").val();
    var like = ""

    if ($("#president").prop("checked")) {
        like += "" + $("#president").val()
    }
    if ($("#fuck2").prop("checked")) {
        like += "" + $("#fuck2").val()
    }
    if ($("#shit").prop("checked")) {
        like += "" + $("#shit").val()
    }
    if ($("#asshole").prop("checked")) {
        like += "" + $("#asshole").val()
    }
    if ($("#bitch").prop("checked")) {
        like += "" + $("#bitch").val()
    }
    if ($("#dick").prop("checked")) {
        like += "" + $("#dick").val()
    }
    if ($("#holishit").prop("checked")) {
        like += "" + $("#holishit").val()
    }
    if ($("#buttbutt").prop("checked")) {
        like += "" + $("#buttbutt").val()
    }
    if ($("#banana").prop("checked")) {
        like += "" + $("banana").val()
    }


    alert("hello, " + age + "歲的" + Name + like)





}
$("#fuck").on("click", fuck);