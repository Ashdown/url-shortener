(function (React, App) {

    App.Components.Container = React.createClass({
        /**
         * @return {object}
         */
        render: function () {
            return (
                <div>
                    <h2>Add a new Shortened Url</h2>
                    <App.Components.GenerateForm />
                    <h2>Shortened Urls</h2>
                    <App.Components.UrlList />
                </div>
                );
        }

    });

})(React, App);