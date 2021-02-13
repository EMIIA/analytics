var graphs = $('.layer');

$('button').on('click', function() {
  var self = $(this),
      activeGraph = $('.layer.active'),
      activeButton = $('button.active'),
      targetGraphIndex = self.attr('data-target');
  
  if (!self.hasClass('active')) {
    activeGraph.removeClass('active');
    activeButton.removeClass('active');
    self.addClass('active');
    graphs.eq(targetGraphIndex).addClass('active');
  }
});