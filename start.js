const { exec } = require("child_process");

const port = process.env.PORT || 3000;
exec(
px serve dist --listen 0.0.0.0:, (err, stdout, stderr) => {
  if (err) {
    console.error(Error starting server: );
    return;
  }
  if (stderr) {
    console.error(stderr);
  }
  console.log(stdout);
});
