var config = config || {};
/**
  
  
  @class config.smartsheet 
  @desc Your client id and app secret provided by Smartsheet API Developer Tools
  
    
*/
config.smartsheet = {
    
    clientId : "",
    appSecret : ""
    
}
/**
  
  @class config.login 
  @desc Handles all configuration related to the login process.
  
    
*/
config.login = {
    
    /**
        @class modal
        @desc Configuration values for the login modal.
        
    */
    modal : {
        
        title : "Let's Get Started!",
        text  : "You must first sign in to your <strong class=\"smartsheet\">smartsheet</strong> account",
        type  : "info",
        html  : true,
        
        closeOnConfirm    : false,
        showConfirmButton : true,
        confirmButtonText : "Sign In",
        
        closeOnCancel     : false,    
        showCancelButton  : true,
        cancelButtonText  : "Nevermind",
    },
    
    /**
      
      @class oauth
      @desc Configuration for the oauth flow...
        
    */
    oauth : {
        authorizeUrl : "https://www.smartsheet.com/b/authorize",
        /**
            @class params 
                Required Open Auth 2.0 Parameters
                
            @see More Reading: 
                https://www.smartsheet.com/developers/api-documentation#h.riewxld9oxpn
             
        */
        params : {
            /**
                must be set to "code"
            */
            response_type : "code",
            /**  
                @property scope 
                
                The permissions required to do whatever you're trying to do
                with a person's smartsheet account.
                
                @notes: 
                
                Required permissions: READ_SHEETS READ_USERS
                Available permissions: 
                
                READ_SHEETS
                    Read all sheet data, including comments, attachments and cell data
    
                WRITE_SHEETS
                    Insert and modify sheet data, including comments, attachments and cell data
                
                SHARE_SHEETS
                	Share sheets, including sending sheets as attachments
                
                DELETE_SHEETS
                	Delete sheets
                
                CREATE_SHEETS
                	Create new sheets
                
                READ_USERS
                	Retrieve users and groups for your Smartsheet organization
                
                ADMIN_USERS
                	Add and remove users from your Smartsheet organization; create groups and manage membership
                
                ADMIN_SHEETS
                	Modify sheet structure, including column definition, publish state, etc.
                
                ADMIN_WORKSPACES
                	Create and manage workspaces and folders, including sharing
            
            */
            scope         : "READ_SHEETS READ_USERS",
            /*
                @property client_id 
                    client id for your app  
            */
            client_id     : config.smartsheet.clientId,
            /**
                
                @property redirect_uri :
                    redirect URL you registered for your app (including protocol, e.g. "http://"); 
                    if not provided, the redirect URL set during registration is used.  
                
            */
            redirect_uri  : "http://kevinmesiab.github.io/simple-smartsheet/login.html",  
        }
    }
    
};