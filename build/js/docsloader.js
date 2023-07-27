

window.onload = function() {
    var docs = document.getElementById('docusaurus-base-url-issue-banner-container');
    if (docs) {
        docs.innerHTML = '<script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.0.0/mermaid.min.js"></script><script>mermaid.initialize({startOnLoad:true});</script>'
        + docs.innerHTML;}
    }
