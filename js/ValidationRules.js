//Our validation script will go here.

$(document).ready(function(){
    
	$.validator.addMethod("alpha", function(value, element) {
	return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
	},"Only Characters Allowed.");
	
	
	$.validator.addMethod("alphanumericspecial", function(value, element) {
     return this.optional(element) || value == value.match(/^[-a-zA-Z0-9_ ]+$/);
     }, "Only letters, Numbers & Space/underscore Allowed.");
	
	//validation implementation will go here.
	$("#loginForm").validate({
	   /* rules: {
	        txtTextOnly: {
	           alpha: true
	        },
			
			password:{
				alphanumericspecial:true
			},
			
			confirmPassword : {
				equalTo : "#password" 
				}
	    },*/
		 messages: {
	         userName:{
				 required:"Enter User Name"  
				 	},
			 password: {
				required: "Enter Password"
			}
			
		 }
	
	});
})