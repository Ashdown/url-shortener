(function (React, App) {
    App.Components.UrlItem = React.createClass({
        /**
         * @return {object}
         */
        render: function () {
            return(
                <li>
                    <span>{this.props.data.url}: </span>
                    <a href={this.props.data.short_url}>{this.props.data.short_url}</a>
                </li>
            );
        }
    });
})(React, App);