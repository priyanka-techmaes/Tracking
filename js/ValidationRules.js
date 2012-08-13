//Our validation script will go here.

$(document).ready(function(){
	 
	$('textarea').autosize();
	
	$.validator.addMethod('notNone', function(value, element){
		if (element.value = ""){
			return false;
		}
		else return true;
		},
		"Please select an option."
		);
 
    
	/*$.validator.addMethod("alpha", function(value, element) {
	return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
	},"Only Characters Allowed.");
	
	
	$.validator.addMethod("alphanumericspecial", function(value, element) {
     return this.optional(element) || value == value.match(/^[-a-zA-Z0-9_ ]+$/);
     }, "Only letters, Numbers & Space/underscore Allowed.");*/
	
	//validation implementation will go here.
	$("#loginForm").validate({
	   
		 messages: {
	         userName:{
				 required:"Enter User Name"  
				 	},
			 password: {
				required: "Enter Password"
			},
			
			
			
		 }
	
	});



    
	
	//validation implementation will go here.
	$('#addTaskMainpage').validate({
		
		rules: {
                assignList: {
                    SelectNone: true
                }
            },
	  
		 messages: {
	         
			 subject:{
				 required:"Please Enter Subject of Task "  
				 	},
			 description: {
				required: "Please Enter Description of Task "
						},
						
				userListName:{
				required: "Please select an option."
				}
		 }
	
	});
})

    

    