var config = config || {};

config.smartsheet = {
    
    clientId : "",
    appSecret : ""
    
}

config.database = {
    name : "sql383324",
    user : "",
    pass : "",
    port : 3306,
    host : "sql3.mysqlhosting.net"
}

config.login = {
    
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
}