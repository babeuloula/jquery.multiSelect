(function($) {
    $.fn.multiSelect = function(options) {
        var defauts = {
            "title" : "Title",
            "elements" : [
                "Lorem",
                "Ipsum",
                "Dolor",
                "Sit",
                "Amet"
            ]
        }

        var params = $.extend(defauts, options);

        return this.each(function () {
            var selector = $(this);

            selector.html("");

            selector.append('<div id="multiSelectSelected"></div>');
            var selected = $("#multiSelectSelected");
            selected.append('<div id="multiSelectElementsSelected">'+params.title+'</div>');
            selected.append('<div id="multiSelectClick">V</div>');

            selector.append('<div id="multiSelectElements"></div>');
            var elements = $("#multiSelectElements");

            for(var i = 0; i < params.elements.length; i++) {
                elements.append('<div class="multiSelectElement">'+params.elements[i]+'</div>');
            }

            $("#multiSelectClick").click(function () {
                if(elements.is(":visible")) {
                    elements.slideUp("fast");
                } else {
                    elements.slideDown("fast");
                }
            });

            $(document).on("click", ".multiSelectElement", function() {
                var prev = $("#multiSelectElementsSelected").html();
                var elem = '<div class="multiSelectElementSelected">' + $(this).html() + '<span class="multiSelectClose">X</span></div>';

                $(this).remove();

                if(prev.trim() == params.title) {
                    prev = "";
                }

                $("#multiSelectElementsSelected").html(prev + elem);
            });

            $(document).on("click", ".multiSelectClose", function() {
                var elem = $(this).parent().html();
                elem = elem.replace('<span class="multiSelectClose">X</span>', '');

                $(this).parent().remove();

                elements.append('<div class="multiSelectElement">'+elem+'</div>');

                if($("#multiSelectElementsSelected").html().trim() == "") {
                    $("#multiSelectElementsSelected").html(params.title);
                }
            });
        });
    };
})(jQuery);
