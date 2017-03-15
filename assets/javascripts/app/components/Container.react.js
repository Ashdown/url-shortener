(function (React, App) {

    function getState() {

        var urls = App.Stores.UrlStore.getAll();

        return {
            urlData: urls
        };
    }

    App.Components.Container = React.createClass({
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

        addNewUrl: function(data) {

            this.state.urlData.push(data);
            this.forceUpdate();

        },

        render: function () {
            return (
                <div>
                    <h2>Add a new Shortened Url</h2>
                    <App.Components.GenerateForm updateCallback={this.addNewUrl}/>
                    <h2>Shortened Urls</h2>
                    <App.Components.UrlList data={this.state.urlData}/>
                </div>
                );
        },

        _onChange: function () {
            this.setState(getState());
        }

    });

})(React, App);