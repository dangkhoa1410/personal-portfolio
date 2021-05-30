import $ from 'jquery'

export function navigation() {
    $('.primary-nav').css('height', $('.logo').height());
    $('.primary-nav li').css(
      'margin-top',
      ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
    );

  }
  
  export function projects() {
    const width = $('.luvtalk-project').width()

    $('.luvtalk-project').css('height', width);
    $('.luvtalk-project h3').css(
      'padding-top',
      ($('.luvtalk-project').height() -
        $('.luvtalk-project h3').height() -
        $('.luvtalk-project .row').outerHeight()) /
        3
    );
    $('.personal-website-project').css(
      'height',
      $('.personal-website-project').width()
    );
    $('.personal-website-project h3').css(
      'padding-top',
      ($('.personal-website-project').height() -
        $('.personal-website-project h3').height() -
        $('.personal-website-project .row').outerHeight()) /
        3
    );
    $('.strike-zone-project').css('height', $('.strike-zone-project').width());
    $('.strike-zone-project h3').css(
      'padding-top',
      ($('.strike-zone-project').height() -
        $('.strike-zone-project h3').height() -
        $('.strike-zone-project .row').outerHeight()) /
        3
    );

    const btnHeight = $('.project-more-info').height()
    $('.project-more-info').css('margin-top','-2.5vw')
    $('.project-more-info').css('margin-left',(width-$('.project-more-info').width())/2)
    
  }
  