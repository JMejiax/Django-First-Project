$(document).ready(function () {

    $("#search").hide();
    $("#btnSearch").hide();
    $("#buttonIn").hide();

    $("#mostrar").click(function () {
        $("#search").toggle();
        $("#btnSearch").toggle();
        $("#mostrar").hide();
    });

    $("#btnSearch").click(function () {
        if ($("#search").val() == "") {
            $("#search").toggle();
            $("#btnSearch").toggle();
            $("#mostrar").show();
        }
    }); 

    window.addEventListener('load', () => {
        const button = document.querySelector('#btnSearch');
        button.addEventListener('click', () => {
            document.querySelector('#search').value = "";
        });
    });

});
