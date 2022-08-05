const connect = require("gulp-connect");
function serverTask() {
  // place code for your default task here
  connect.server({
    port: 8080,
    livereload: true
  })
}

exports.server = serverTask;