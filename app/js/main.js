$(function() {
    var imh = $('a[href="#markets"]');
    imh.hover(function() {
        $('img[src="assets/img/img-market.svg"]').attr('src', 'assets/img/img-markets-on.svg');
    }, function() {
        $('img[src="assets/img/img-markets-on.svg"]').attr('src', 'assets/img/img-market.svg');
    });

    var imhL = $('a[href="#news"]');
    imhL.hover(function() {
        $('img[src="assets/img/img-list.svg"]').attr('src', 'assets/img/img-list-on.svg');
    }, function() {
        $('img[src="assets/img/img-list-on.svg"]').attr('src', 'assets/img/img-list.svg');
    });

    var imh = $('a[href="#dice"]');
    imh.hover(function() {
        $('img[src="assets/img/img-bone.svg"]').attr('src', 'assets/img/img-bone-on.svg');
    }, function() {
        $('img[src="assets/img/img-bone-on.svg"]').attr('src', 'assets/img/img-bone.svg');
    });



    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $("#myModal").modal('show');

    var sb = $('#sub-tabs a');
    sb.click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    var gen = $('#re-generate');
    var field = $('.form-control');
    gen.click(function(e) {
        e.preventDefault();
        var rand = function() {
            return Math.random().toString(36).substr(2);
        };
        var token = function() {
            return rand() + rand();
        };
        field.attr('placeholder', token());
    });

    $( "#tabs" ).tabs();

    var sb = $('#sub-tabs a');
    sb.click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
});