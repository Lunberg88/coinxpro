$(function() {
    /*
    // Deposit frame
    var depBtn = $('.balance-btn-deposit');
    var bMod = $('#deposit-frame');
    depBtn.click(function() {
        bMod.show('slider');
        $('.insert-title').html('<h4>'+ $(this).attr('data-title') + ' <span style=\"text-transform: capitalize;\">deposit</span></h4>').css('text-transform', 'uppercase');
    });

    // Withdrawal frame
    var drwlBtn = $('.balance-btn-drwl');
    var dBtn = $('#drwl-frame');
    drwlBtn.click(function() {
        dBtn.show('slider');
        $('.insert-title').html('<h4>'+ $(this).attr('data-title') + ' <span style=\"text-transform: capitalize;\">Withdrawal</span></h4>').css('text-transform', 'uppercase');
    });

    // Close button
    $('.close-btn').click(function() {
        $('.balance--window').hide('slider');
    });

    ///////
    ///////
    function openFrame(btn, cls) {

    }

    */
    $('table > button').click(function() {
        var curFrame = $(this).attr('data-target');
        $('#' + curFrame).show('slider');
            $('.insert-title')
                .html('<h4>'+ $(this).attr('data-title') + ' <span style=\"text-transform: capitalize;\">Withdrawal</span></h4>').css('text-transform', 'uppercase');
    });
});