const Handlebars = require("handlebars");
const fs = require("fs");

function compile(filepath, templateInput) {
    if (!filepath) throw new Error("No file name provided");
    const templateFile = fs.readFileSync(filepath);

    const template = Handlebars.compile(templateFile.toString());
    
    const newfilePathSegments = filepath.split("/");
    newfilePathSegments[newfilePathSegments.length - 1] = "inline-" + newfilePathSegments[newfilePathSegments.length - 1];
    const newFilepath = newfilePathSegments.join("/").replace(".hbs", ".html");

    if (typeof templateInput === "string") {
        templateInput = JSON.parse(templateInput)
    }

    fs.writeFileSync(newFilepath, template(templateInput));
}

module.exports = {
    default: compile
}