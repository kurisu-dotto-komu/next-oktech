import express from "express";
import path from "path";

import nextConfig from "./next.config";

const app = express();
const PORT: number = 3000;
const basePath = nextConfig.basePath || "/";

app.use(basePath, express.static(path.join(__dirname, "out")));

if (basePath !== "/") {
  app.get("/", (_, res) => {
    res.redirect(`${basePath}`);
  });
}

app.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}${basePath}`);
});
