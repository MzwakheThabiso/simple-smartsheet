var app = app || {};

app.login = function() {
    
    swal(config.login),
    
    function(isConfirm){
        
        if (isConfirm) {
            
            swal("Success!", "One moment while we set up the awesome!", "success");
        
        } else {
        
            swal("Cancelled", "You have to be logged in to use SmartView", "error");
        }
        
        return isConfirm;
        
    });
    
};


if( ! app.login() ) {
    app.login();
};