(function (React, App) {

    App.Components.UrlList = React.createClass({displayName: "UrlList",
        /**
         * @return {object}
         */

        render: function () {
            var urlData = this.props.data,
                urlItems = [];

            for(var key in urlData) {
                urlItems.push(React.createElement(App.Components.UrlItem, {key: key, data: urlData[key]}));
            }

            return(React.createElement("ul", {className: "url-list"}, urlItems));
        }

    });

})(React, App);
