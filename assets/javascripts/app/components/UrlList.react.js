(function (React, App) {

    App.Components.UrlList = React.createClass({
        /**
         * @return {object}
         */

        render: function () {
            var urlData = this.props.data,
                urlItems = [];

            for(var key in urlData) {
                urlItems.push(<App.Components.UrlItem key={key} data={urlData[key]} />);
            }

            return(<ul className="url-list">{urlItems}</ul>);
        }

    });

})(React, App);
