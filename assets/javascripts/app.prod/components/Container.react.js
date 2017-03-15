(function (React, App) {

    function getState() {

        var urls = App.Stores.UrlStore.getAll();

        return {
            urlData: urls
        };
    }

    App.Components.Container = React.createClass({displayName: "Container",
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
                React.createElement("div", null, 
                    React.createElement("h2", null, "Add a new Shortened Url"), 
                    React.createElement(App.Components.GenerateForm, {updateCallback: this.addNewUrl}), 
                    React.createElement("h2", null, "Shortened Urls"), 
                    React.createElement(App.Components.UrlList, {data: this.state.urlData})
                )
                );
        },

        _onChange: function () {
            this.setState(getState());
        }

    });

})(React, App);