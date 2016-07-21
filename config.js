/**
 * This is a sample configuration meant to get users and up running on a local
 * machine.  The configuration will not support multi-process on a single
 * server or multi-server/elastic environments.  For more detailed information
 * on the options provided please refer to the /include/config.js file.
 *
 * The file can be renamed to "config.js" in the same directory as this file
 * and it will be used as the configuration when PencilBlue is started.  If
 * this file is used then there is no need to create a "config.json"
 */

module.exports = {
    "siteName": "Tribal Reconnection",
    "siteRoot": "http://localhost:8080",
    "sitePort": 8080,
    "logging": {
        "level": "info"
    },
    "db": {
        "type": "mongo",
        "servers": [
            "mongodb://gette:12345@ds027165.mlab.com:27165/heroku_xg45bt2v"
        ],
        "name": "heroku_xg45bt2v",
        "writeConcern": 1,
        "query_logging": false
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": false,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": false,
            "use_cache": false
        }
    },
    "registry": {
        "type": "mongo"
    },
    "session": {
        "storage": "mongo"
    },
    "media": {
        "provider": "mongo",
        "max_upload_size": 6 * 1024 * 1024
    },
    "cluster": {
        "workers": 1,
        "self_managed": true
    },
    multisite: {
        enabled: false,
        globalRoot: "http://global.localhost:8080"
    },
    "siteIP": "0.0.0.0"
};

