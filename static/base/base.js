$(document).ready(function () {
    $("#mostar").click(function () {
        $("#search").toggle();        
        $("#btnSearch").toggle();        
    });


    window.addEventListener('load', () => { 
        const button = document.querySelector('#btnSearch'); 
        button.addEventListener('click', () => { 
            document.querySelector('#search').value = ""; 
        }); 
    }); 

});
