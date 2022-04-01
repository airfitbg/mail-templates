var inlineCss = require('inline-css');
var fs = require('fs');

async function main(filepath) {
    if (!filepath) throw new Error("No file name provided");

    const file = fs.readFileSync(filepath);
    const inlinedHtml = await inlineCss(file.toString(), {
        url: "./"
    });
    const newfilePathSegments = filepath.split("/");
    newfilePathSegments[newfilePathSegments.length - 1] = "inline-" + newfilePathSegments[newfilePathSegments.length - 1];
    const newFilepath = newfilePathSegments.join("/");

    fs.writeFileSync(newFilepath, inlinedHtml)
}

main();