const { exec } = require("child_process");

// Serve the Vite build from the "dist" folder using serve
exec(`npx serve dist -l tcp://0.0.0.0:${process.env.PORT}`, (err, stdout, stderr) => {
  if (err) {
    console.error("❌ Server error:", err);
    return;
  }
  console.log("✅ Server started:\n", stdout);
});
