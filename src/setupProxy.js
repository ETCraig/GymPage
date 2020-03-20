const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/.netlify/functions/', {
        target: 'http://ec2-13-52-77-223.us-west-1.compute.amazonaws.com:4000',
        "pathRewrite": {
            "^/\\.netlify/functions": ""
        }
    }))
}