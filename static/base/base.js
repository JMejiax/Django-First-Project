$(document).ready(function () {

    $("#search").hide();        
    $("#btnSearch").hide(); 

    $("#mostar").click(function () {
        $("#search").toggle();        
        $("#btnSearch").toggle();   
        $("#mostar").hide();
    });


    window.addEventListener('load', () => { 
        const button = document.querySelector('#btnSearch'); 
        button.addEventListener('click', () => { 
            document.querySelector('#search').value = ""; 
        }); 
    }); 

});
