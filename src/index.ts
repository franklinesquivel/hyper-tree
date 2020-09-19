#!/usr/bin/env node
import program      from "./program";
import generateTree from "./commands/generateTree";

if (program.test) {
    console.log("The CLI is up an running!")
} else {
    generateTree();
}

