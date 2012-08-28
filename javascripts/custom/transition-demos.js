$('.transition-demo')
  .on('mouseenter dblclick', function() {
    // run
    eval( $(this).next('.sh_javascript').text() );
  })
  .on('mouseleave', function() {
    // restore
    $('.box', this).remove().end().append('<div class="box"></div>');
  })
  .on('click', function() {
    // stop transitions and clear queues
    $('.box', this).stop(true);
  });

var support = [], cssHooks = ['<code>// Set + Get</code>'];

_.each(['transition', 'transform', 'transformOrigin', 'transformStyle', 'perspective', 'perspectiveOrigin', 'backfaceVisibility'], function(prop) {
  support.push("<code>$.support."+ prop +" === "+ ($.support[prop] ? "'"+$.support[prop]+"'" : "false") +";</code>");

  if ( $.support[prop] ) cssHooks.push("<code>$.fn.css['"+ prop +"'];</code>");
});
support.push("<code>$.support.transitionEnd === '"+ $.support.transitionEnd +"';</code>");

$('.sh_javascript').eq(-2).html( cssHooks.join('\n') );
$('.sh_javascript').eq(-1).html( support.join('\n') );

sh_highlightDocument();