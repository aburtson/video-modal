/*  video modal ***********************************************************************
 **************************************************************************************/
// must have a .site-constraint or body set to relative

function videoModal() {
    var $siteConstraint = $('.site-constraint');
    var $body = $('body');

    $('[data-video]').on('click', function(){
        var videoAttr = $(this).attr('data-video');
        var videoModal = $('<div class="video-modal"><span class="video-close"></span><div class="video-wrapper"><div class="video-container"><iframe ' + videoAttr + '></iframe></div></div></div>');
        $siteConstraint.append(videoModal);
        setTimeout(function(){
            $body.addClass('video-modal-active');
        }, 200);
    });
    $(document).on('click', '.video-modal', function(){
        var $this = $(this);
        $body.removeClass('video-modal-active');
        setTimeout(function(){
            $this.remove();
        }, 500);

    });
    $(document).on('click', '.video-close', function(){
        $body.removeClass('video-modal-active');
        setTimeout(function(){
            $('.video-modal').remove();
        }, 500);

    });
}