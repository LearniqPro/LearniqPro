$(document).ready(function() {
    $("#contactform").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true,
                mobile: true
            },
            phone: "required",
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            phone: "Please enter your phone number",
            message: "Please enter your message"
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $(form).serialize(),
                success: function(response) {
                    alert("Form submitted successfully!");
                }
            });
            return false;
        }
    });
});