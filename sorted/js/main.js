'use strict';
function takeInvite() {
    $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/d/1MITI8tWuuQToJA0EkhQDwRBZHEFyb_Lbsc3ZKZP_M1Y/formResponse',
        data: $('#inviteForm').serialize(),
        crossDomain: true,
        success: function success(data) {
        },
        error: function error(err) {
            $('#inviteForm').hide();
            $('.after-successfull-invite').fadeIn();
        }
    });
}
$('#sign-up-submit').click(function (e) {
    e.preventDefault();
    console.log('click');
    takeInvite();
});
