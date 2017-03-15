(function (React, App, assign) {

    var CHANGE_EVENT_STRING = 'url_change';
    var CHANGE_EVENT = new Event(CHANGE_EVENT_STRING);
    var _urls = [];

    /**
     * Create a url
     * @param {object} raw data for this url
     */

    function create(data) {
        //use timestamp as the id
        var id = Date.now();

        _urls.push({
            id: id,
            url: data.url,
            short_url: data.short_url

        });
    }

    App.Stores.UrlStore = function () {
    };

    App.Stores.UrlStore = assign({}, App.Stores.UrlStore.prototype, {

        getAll: function () {
            return _urls;
        },

        addChangeListener: function (callback) {
            App.target.addEventListener(CHANGE_EVENT_STRING, callback);
        },

        removeChangeListener: function (callback) {
            App.target.removeEventListener(CHANGE_EVENT_STRING, callback);
        },

        emitChange: function () {
            App.target.dispatchEvent(CHANGE_EVENT)
        },

        dispatcherIndex: App.Dispatcher.register(function (payload) {
            var action = payload.action;
            var data;

            switch (action.actionType) {

                case App.Constants.UrlConstants.CREATE_URL:
                    data = action.data;
                    create(data);
                    App.Stores.UrlStore.emitChange();
                    break;
            }

            return true;
        })

    });


})(React, App, objectAssign);