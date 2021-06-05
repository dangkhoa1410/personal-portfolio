import $ from 'jquery'

export function navigation() {
    $('.primary-nav').css('height', $('.logo').height());
    $('.primary-nav li').css(
      'margin-top',
      ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
    );

  }
  
  export function projects() {
    const width = $('.project-container').width()

    $('.project-container').css('height', width);
    $('.project-container h3').css(
      'padding-top',
      ($('.project-container').height() -
        $('.project-container h3').height() -
        $('.project-container .row').outerHeight()) /
        3
    );
    
    $('.project-more-info').css('margin-top','-2.7vw')
    $('.project-more-info').css('margin-left',(width-$('.project-more-info').width())/2)
    
  }
  