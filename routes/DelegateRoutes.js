const articles = require('./Articles');
const auth = require('./Auth');
const exercise = require('./Exercises');
const posts = require('./Posts');
const profiles = require('./Profiles');
const routines = require('./Routines');
const store = require('./Store');
const users = require('./Users');

function delegateRoute(app) {
    console.log('ROUTES');
    app.use('/api/articles', articles)
    app.use('/api/auth', auth)
    app.use('/api/exercise', exercise)
    app.use('/api/posts', posts)
    app.use('/api/profile', profiles)
    app.use('/api/routines', routines)
    app.use('/api/store', store)
    app.use('/api/users', users)
}

module.exports = delegateRoute;