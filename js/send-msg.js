$(function() {

    $('#contactform').validate({
        rules: {
            name: "required",
            email: "required",
            mobile: "required",
            subject: "required",
            message: "required",
        },
        messages: {
            name: "Oops.! The name field is required.",
            email: "Oops.! The Email Address is required.",
            subject: "Oops.! The  Phone is required.",
            message: "Oops.! The Message field is required.",
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            error.addClass('invalid-feedback');
            element.closest('#validetion').append(error);
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        },

        // Your existing validation rules and other configuration
        submitHandler: function(form) {
            $('#submitcontact').attr('disabled', true);
            $('#submitcontact').html('Sending...');

            $.ajax({
                type: 'POST',
                url: $('#contactform').attr('action'),
                data: $('#contactform').serialize(),

                success: function(data) {
                    $('#submitcontact').attr('disabled', false);
                    $('#submitcontact').html('Send your inquiry');
                    $('#contactform')[0].reset(); // Reset the form

                    // Redirect to the thank you page
                    window.location.href = 'thank-you.html';
                },
                error: function(data) {
                    // Your existing error handling logic
                }
            });

            return false;
        }
    });
});