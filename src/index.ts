#!/usr/bin/env node
import chalk   from "chalk";
import clear   from "clear";
import figlet  from "figlet";
import program from "commander";

clear();
console.log(
    chalk.cyanBright(
        figlet.textSync('hyper-tree', {horizontalLayout: 'full'})
    )
);

// For new flags just follow the next template, .option('-{shorthand}, --{long_name}', '{Help for flag}')
program
    .version('1.2.0')
    .description("A CLI for obtaining files in a directory")
    .option('-t, --test', 'Test command')
    .parse(process.argv);

// Put new code for other things below this comment

// If the user used a flag, it will count as boolean, in a future I will research for passing text with flags
if (program.test) console.log("The CLI is up an running!");
