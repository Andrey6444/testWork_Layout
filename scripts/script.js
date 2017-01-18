(function ($) {
$('.open_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay').show();
});
$('.popup .close, .overlay').click(function() {
    $('.overlay, .popup').hide();
});
$('.send-button').click(function() {
    alert("Your message successfully sent")
});
})(jQuery);