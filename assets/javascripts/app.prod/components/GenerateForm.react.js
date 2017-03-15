(function (React, App) {
    App.Components.GenerateForm = React.createClass({displayName: "GenerateForm",
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
              React.createElement("form", {className: "generate-form", onSubmit: this.submitUrl}, 
                  React.createElement("input", {id: "url-input", type: "text", name: "url", ref: "urlInput"}), 
                  React.createElement("input", {type: "submit", name: "submit", value: "Submit"})
              )
            );
        }

    });

})(React, App);