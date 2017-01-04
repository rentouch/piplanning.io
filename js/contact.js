$(function () {
    console.log("initalized")
    $( '#contact-form' ).on('submit', function (e) {
        console.log("yes we do something")
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            console.log($(this).serialize());
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    console.log("Success?")
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    console.log(messageText);

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});