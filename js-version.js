(function() {
    "use strict";

    var versions = (function() {
        var array = [];
        var major = 1;
        var minor = 1;
        while(major < 3) {
            while(minor < 10) {
                array.push(major + "." + minor++);
            }
            major++;
            minor = 0;
        }
        return array.reverse();
    })()

    window.js_version = "";

    var script = undefined;
    var version = undefined;
    var scripts = [];
    while(versions.length !== 0) {
        version = versions.pop();
        scripts.push((script = document.createElement("script")));
        script.setAttribute("language", "javascript" + version);
        script.text = "window.js_version = '" + version + "';";
        document.head.appendChild(script);
    }

    while(scripts.length !== 0) {
        scripts.pop().remove();
    }

    script = scripts = version = versions = undefined;

})();
