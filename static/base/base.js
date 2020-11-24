$(document).ready(function () {

    $("#search").hide();        
    $("#btnSearch").hide(); 
    $("#buttonIn").hide(); 

    $("#mostrar").click(function () {
        $("#search").toggle();        
        $("#btnSearch").toggle();   
        $("#mostrar").hide();
    });

    // $("#navbar1").click(function () {
    //     $("#search").hide();        
    //     $("#btnSearch").hide(); 
    //     $("#mostar").show();
    // });    

    window.addEventListener('load', () => { 
        const button = document.querySelector('#btnSearch'); 
        button.addEventListener('click', () => { 
            document.querySelector('#search').value = ""; 
        }); 
    }); 

});
