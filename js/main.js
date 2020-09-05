$(document).ready(function() {

    $('#fullpage').fullpage({


        anchors: ['Page00','Page01', 'Page02', 'Page03', 'Page04', 'Page05', 'Page06'],

        navigationTooltips: ['Page00','Page01', 'Page02', 'Page03', 'Page04', 'Page05', 'Page06'],

        afterLoad: function(anchorLink, index){
            if (index == 1) {
                $('#section01 .text').addClass('on');
                $('#section01 .scroll').addClass('on');
            } else {
                $('#section01 .text').removeClass('on');
                $('#section01 .scroll').removeClass('on');
            }
            if (index == 2) {
                $('#section02 .text').addClass('on');
                $('#section02 .line').addClass('on');
            } else {
                $('#section02 .text').removeClass('on');
                $('#section02 .line').removeClass('on');
            }
            if (index == 3) {
                $('#section03 .text').addClass('on');
                $('#section03 .line').addClass('on');
            } else {
                $('#section03 .text').removeClass('on');
                $('#section03 .line').removeClass('on');
            }
            if (index == 4) {
                $('#section04 .text').addClass('on');
                $('#section04 .line').addClass('on');
            } else {
                $('#section04 .text').removeClass('on');
                $('#section04 .line').removeClass('on');
            }
            if (index == 5) {
                $('#section05 .text').addClass('on');
                $('#section05 .line').addClass('on');
            } else {
                $('#section05 .text').removeClass('on');
                $('#section05 .line').removeClass('on');
            }
            if (index == 6) {
                $('#section06 .text').addClass('on');
                $('#section06 .line').addClass('on');
            } else {
                $('#section06 .text').removeClass('on');
                $('#section06 .line').removeClass('on');
            }
            if (index == 7) {
                $('#section07 .text').addClass('on');
                $('#section07 .line').addClass('on');
            } else {
                $('#section07 .text').removeClass('on');
                $('#section07 .line').removeClass('on');
            }

        }

    });



});

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});