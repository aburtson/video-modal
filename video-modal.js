/*  video modal ***********************************************************************
 **************************************************************************************/
// must have a .site-constraint or body set to relative

videoModal();

function videoModal() {
    var $siteConstraint = $('.site-constraint');
    var $body = $('body');

    $('[data-video]').on('click', function(){
        console.log('data-video click');
        var videoAttr = $(this).attr('data-video');
        var videoModal = $(
            '<div class="video-modal">' +
                '<div class="video-modal__inner">' +
                    '<span class="video-modal__close"></span>' +
                    '<div class="video__wrapper">' +
                        '<iframe src="https://www.youtube.com/embed/' + videoAttr + '?enablejsapi=1&iv_load_policy=3&playerapiid=wrapper_component_21&disablekb=1&wmode=transparent&controls=1&playsinline=0&showinfo=0&modestbranding=1&rel=0&autoplay=1&loop=0&vq=auto" frameborder="0" allowfullscreen>' + '</iframe>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
        $siteConstraint.append(videoModal);
        setTimeout(function(){
            $body.addClass('video-modal--active');
        }, 200);
    });
    $(document).on('click', '.video-modal', function(){
        var $this = $(this);
        $body.removeClass('video-modal--active');
        setTimeout(function(){
            $this.remove();
        }, 500);
    });
    $(document).on('click', '.video-close', function(){
        $body.removeClass('video-modal--active');
        setTimeout(function(){
            $('.video-modal').remove();
        }, 500);
    });
}