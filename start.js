const { exec } = require("child_process");

const port = process.env.PORT || 3000;

exec(\
px serve dist --listen \\, (err, stdout, stderr) => {
  if (err) {
    console.error("? Error starting server:", err);
    return;
  }
  console.log("? Server started:");
  console.log(stdout);
  console.error(stderr);
});
