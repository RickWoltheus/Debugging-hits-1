(function() {
    if (typeof(document.documentElement.clientWidth) != 'undefined') {
        var info = document.getElementById('info');
        info.innerHTML = document.documentElement.clientWidth;
        window.onresize = function(event) {
            info.innerHTML = document.documentElement.clientWidth;
        };
    }
})();
