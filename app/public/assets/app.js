$("#submit").on("click", function() {
    
 event.preventDefault();
    
 var email = $("#email-input").val().trim();
 var password = $("#password-input").val().trim();
    
 console.log(email);
 console.log(password);
    
 window.location.href="index.html";
    
    
    
 $("#email-input").val("");
 $("#password-input").val("");
    
});

/*$("#stock-submit").on("click", function() {
    
 event.preventDefault();
    
 var stockName = $("#stock_name").val().trim();
 var quantity = $("#quantity").val().trim();
    
 console.log(stockName);
 console.log(quantity);
    
 
    
    
    
 $("#stock_name").val("");
 $("#quantity").val("");
    
});*/