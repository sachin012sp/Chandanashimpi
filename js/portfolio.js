/* nicescroll customization */
  var nice = function (){
	  $('body').niceScroll({
    cursorcolor: '#148914',
    cursorwidth: '8px',
    cursorborder: '1px solid #115111',                
    scrollspeed: 100,
    autohidemode: false,
    horizrailenabled: false,
    cursorborderradius: 3,
    zindex: 1060
  });
  };
  $(document).ready(function(){
      nice();
});

/* close navbar collapse after click in mobile */
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});

/* Strengths section chart */
	$(document).ready(function(){
    columnChart();
    
    function columnChart(){
        var item = $('.chart', '.column-chart').find('.item'),
        itemWidth = 100 / item.length;
        item.css('width', itemWidth + '%');
        
        $('.column-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            itemProgress.css('height', itemProgressHeight);
        });
    };
});

/* Skills section chart */
 var circleChart = function (){
  $('.chart1').easyPieChart({
    animate: 2000,
    barColor: '#148914', //Green
    trackColor: '#f6f6f6', //Gray
	scaleColor:	false, //specify '#f6f6f6' to display
	lineCap: 'square',
    size: 150,
    lineWidth: 8,
    easing: 'easeOutCirc',
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
};
 $(document).ready(function(){
      circleChart();
});
