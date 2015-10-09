app.directive("openMedi", function() {
    return {
        link: function(scope, elem, attrs) {
            elem.on("click", function() {
                elem.addClass("active");
            });
        }
    };
});