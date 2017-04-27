Reveal.initialize({
    progress: true,
    history: true,
    center: true,
    controls: true,
    fragments: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom
    slideNumber: 'c/t',

  // Optional reveal.js plugins
  dependencies: [
    { src: 'plugin/js/classList.js' },
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/highlight_1/highlight_1.js', async: true,
      condition: function () {
      return !!document.querySelector('pre code');
    },
      callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

$(document).ready(function () {
    $('video').attr('loop','loop');
})