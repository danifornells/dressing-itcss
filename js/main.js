/*
* ---------------------------------------
* INIT REVEAL JS
*
* */

// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    history: true,

    // More info https://github.com/hakimel/reveal.js#dependencies
    dependencies: [
        { src: 'js/plugin/markdown/marked.js' },
        { src: 'js/plugin/markdown/markdown.js' },
        { src: 'js/plugin/notes/notes.js', async: true },
        { src: 'js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }

    ]
        //{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
});


/*
 * ---------------------------------------
 * OTHER JS
 *
 * */

var DF = window.DF = window.DF || {};

DF.lazySource = function(){
    window.setTimeout(function(){
        var lazyElements = document.querySelectorAll('[lazy-src]');
        for (var i = 0, n = lazyElements.length; i < n; i++)
        {
            lazyElements[i].setAttribute('src', lazyElements[i].getAttribute('lazy-src') );
        }
    }, 1000);
};

if (document.readyState != 'loading') {
    DF.lazySource();
} else {
    document.addEventListener('DOMContentLoaded', DF.lazySource);
}