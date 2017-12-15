$(function() {
    $('table button').click(function() {
        var curFrame = $(this).attr('data-target');
        $('#' + curFrame).show('slider');
        $('.insert-title')
            .html('<h4>'+ $(this).attr('data-title') + ' <span style=\"text-transform: capitalize;\">' + $(this).attr('data-name') + '</span></h4>').css('text-transform', 'uppercase');
    });

    $('.close-btn').click(function() {
        $('.balance--window').hide('slider');
    });
});