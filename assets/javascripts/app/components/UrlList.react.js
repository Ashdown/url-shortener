(function (React, App) {

    function getState() {

        var urls = App.Stores.UrlStore.getAll();

        return {
            urlData: urls
        };
    }

    App.Components.UrlList = React.createClass({
        /**
         * @return {object}
         */

        getInitialState: function () {
            return getState();
        },

        componentDidMount: function () {
            App.Stores.UrlStore.addChangeListener(this._onChange);
            App.Actions.Url.get();
        },

        componentWillUnmount: function () {
            App.Stores.UrlStore.removeChangeListener(this._onChange);
        },

        render: function () {
            var urlData = this.state.urlData,
                urlItems = [];

            for(var key in urlData) {
                urlItems.push(<App.Components.UrlItem key={key} data={urlData[key]} />);
            }

            return(<ul className="url-list">{urlItems}</ul>);
        },

        _onChange: function () {
            this.setState(getState());
        }
    });

})(React, App);
