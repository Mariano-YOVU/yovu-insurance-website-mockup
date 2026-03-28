const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

// Extensionless routing for nested static pages.
app.get('*', (req, res) => {
  const targetPath = path.join(publicDir, req.path, 'index.html');
  res.sendFile(targetPath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(publicDir, 'index.html'));
    }
  });
});

app.listen(port, () => {
  console.log(`YOVU mockup server running on port ${port}`);
});
