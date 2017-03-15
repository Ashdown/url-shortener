(function (React, App) {
    App.Components.UrlItem = React.createClass({displayName: "UrlItem",
        /**
         * @return {object}
         */
        render: function () {
            return(
                React.createElement("li", null, 
                    React.createElement("span", null, this.props.data.url, ": "), 
                    React.createElement("a", {href: this.props.data.short_url}, this.props.data.short_url)
                )
            );
        }
    });
})(React, App);