const { compile } = require("./compile");

if (process.argv.includes("compile")) {
    const filepath = process.argv[3];
    compile(filepath, {});
}