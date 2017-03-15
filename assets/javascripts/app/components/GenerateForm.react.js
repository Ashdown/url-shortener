(function (React, App) {
    App.Components.GenerateForm = React.createClass({
        /**
         * @return {object}
         */
        render: function() {
            return (
              <form className="generate-form">
                  <input type="text" name="url" />
                  <input type="submit" name="submit" value="Submit" />
              </form>
            );
        }

    });

})(React, App);