(function ($) {
    $.fn.bootstrapAlert = function (options) {
        var settings = $.extend({
            "type": "success",
            "showIcon": true,
            "icon": "exclamation-circle",
            "showCloseButton": true
        }, options);

        this.filter("div").each(function () {
            $containerDiv = $("<div></div>");

            $containerDiv.addClass("alert fade in alert-" + settings.type);

            if (settings.showIcon === true) {
                $icon = $("<i></i>")
                        .addClass("fa fa-" + settings.icon)
                        .css("margin-right", "5px");

                $icon.appendTo($containerDiv);
            }

            if (settings.showCloseButton === true) {
                $closeButton = $('<button />');

                $closeButton.addClass("close close-sm")
                    .attr("type", "button")
                    .attr("data-dismiss", "alert");

                $btnIcon = $("<i></i>")
                        .addClass("fa fa-times");

                $btnIcon.appendTo($closeButton);

                $closeButton.appendTo($containerDiv)
            }

            $containerDiv.append(settings.content);

            $containerDiv.appendTo(this);
        });

        return this;
    }
}(jQuery));