const { Console } = require("console");
const fs = require("fs");
const path = require("path");

class Directory {
  constructor() {
    this._dir = "docs";
    this._path = __dirname;
    this.createDocsDir();
  }

  createDocsDir() {
    this._path = path.join(this._path, this._dir);

    if (fs.existsSync(this._dir)) {
      fs.mkdirSync(this._dir);
    }
  }

  getPath() {
    return this._path;
  }

  getShortPath() {
    const path = path.parse(this._path);
    let deliniter = "/";

    if (paths.dir.indexOf(deliniter) < 0) {
      deliniter = `\\`;
    }

    return `${path.root}...${deliniter}${paths.name}`;
  }

  getFileInDir() {
    const file = fs.readdirSync(this._path);
    let n = 0;

    console.log(`
##############################
 Ubicacion: ${this.getShortPath()}
#############################`);

    file.forEach((file) => {
      if (file != "DS_Store") {
        console.log(` ${file}`);
        n++;
      }
    });
  }
}

module.exports = Directory;