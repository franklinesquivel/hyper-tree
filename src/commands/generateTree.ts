import chalk                       from "chalk";
import { generateTreeCommandType } from "../types/commands";
import { lstatSync, readdir, }     from "fs";
import { normalize }               from "path";

const directoryPath = process.cwd();

const generateTree: generateTreeCommandType = () => {
    console.log(`${ chalk.red("Analyzing: ") } ${ directoryPath }\n`);

    readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log(chalk.red("Unable to scan directory:") + err);
        }

        files.forEach(function (file) {
            const normalizedFilePath = normalize(`${ directoryPath }/${ file }`);
            const obj = lstatSync(normalizedFilePath);

            if(obj.isDirectory()) {
                console.log(`${file}/`);
            } else {
                console.log(`${file}`);

            }
        });
    });
}

export default generateTree;