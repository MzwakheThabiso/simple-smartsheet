var app = app || {};

app.login = function() {
    
    swal(config.login.modal,
    
    function(isConfirm){
        
        if (isConfirm) {
            
            /*
              
              Wait two seconds then redirect to the authorize login.  Why wait?  Operations
              that ocurr two fast in certain instances can fool a user into believing 
                
            */
            window.location = config.login.oauth.authorizeUrl + '?' + $.param(config.login.oauth.params);
                     
        } else {
        
            /*
            
                Wait two seconds then log in again
                  
            */
            swal("Cancelled", "You have to be logged in to use SmartView", "error");
        }
        
    });
    
};

app.login();