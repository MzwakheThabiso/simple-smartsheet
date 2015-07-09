var app = app || {};

app.login = function() {
    
    swal({
        title : "Let's Get Started!",
        text  : "You must first sign in to your <strong>smartsheet</strong> account",
        type  : "info",
        html  : true,
        
        showConfirmButton : true,
        confirmButtonText : "Sign In",
        
        showCancelButton  : true,
        cancelButtonText  : "Nevermind",
        
        closeOnConfirm    : false,
        closeOnCancel     : false,
        //imageUrl          : "http://lh3.googleusercontent.com/yQ3iHbrAsf2gmHVr9r8SE_XdIKDEJ4KJdyrqDMPIPbBmwehFW81e0M1SSRjmArPz0Cah3W6nDC5v6BPf=s120?gr=14285c03a63"
    },
    
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