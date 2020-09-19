import program from "commander";

program
    .version('1.2.0')
    .description("A CLI for obtaining files in a directory")
    .option('-t, --test', 'Test command')
    .parse(process.argv);

export default program;