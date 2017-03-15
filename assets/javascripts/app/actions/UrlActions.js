(function(React, App, fetch, Request){
    App.Actions.Url = {
        get: function() {

            fetch('/redirections')
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                    for(var i = 0; i < data.length; i++) {
                        App.Dispatcher.handleViewAction({
                            actionType: App.Constants.UrlConstants.CREATE_URL,
                            data: data[i]
                        });
                    }
                }).catch(function(ex) {
                    //console.log('parsing failed', ex);
                });

        },
        post: function() {
            fetch('/generate', {
                method: 'POST',
                body: new FormData(document.getElementsByClassName('generate-form')[0])
            }).then(function(response) {
                //after???
            });

        }
    }
})(React, App, fetch, Request);