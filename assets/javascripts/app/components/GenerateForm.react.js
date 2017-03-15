(function (React, App) {
    App.Components.GenerateForm = React.createClass({
        /**
         * @return {object}
         */

        submitUrl: function(event) {
            event.preventDefault();

            App.Actions.Url.post();

        },

        render: function() {
            return (
              <form className="generate-form" onSubmit={this.submitUrl}>
                  <input type="text" name="url" />
                  <input type="submit" name="submit" value="Submit" />
              </form>
            );
        }

    });

})(React, App);