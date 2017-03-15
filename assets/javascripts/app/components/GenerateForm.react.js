(function (React, App) {
    App.Components.GenerateForm = React.createClass({
        /**
         * @return {object}
         */

        submitUrl: function(event) {
            event.preventDefault();

            var newUrl = this.refs.urlInput.getDOMNode().value;

            if (newUrl.indexOf('http://') !== 0){
                this.refs.urlInput.getDOMNode().value = 'http://' + newUrl;
            }

            App.Actions.Url.post(this.props.updateCallback);

        },

        render: function() {
            return (
              <form className="generate-form" onSubmit={this.submitUrl}>
                  <input id="url-input" type="text" name="url" ref="urlInput" />
                  <input type="submit" name="submit" value="Submit" />
              </form>
            );
        }

    });

})(React, App);