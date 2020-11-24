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

    $("#search").keydown(function () {
        if ($("#search").val() == "") {
            $("#innerIcon").removeClass("fa-search").addClass("fa-times");
        }else{
            $("#innerIcon").removeClass("fa-times").addClass("fa-search");
        }
    }); 

    window.addEventListener('load', () => {
        const button = document.querySelector('#btnSearch');
        button.addEventListener('click', () => {
            document.querySelector('#search').value = "";
        });
    });

});
