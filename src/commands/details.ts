import chalk                  from "chalk";
import figlet                 from "figlet";
import { detailsCommandType } from "../types/commands";
import program                from "../program";

/**
 * TODO
 *  Implement details command
 */
const details: detailsCommandType = () => {
    console.log(
        chalk.cyanBright(
            figlet.textSync('hyper-tree', { horizontalLayout: 'full' })
        )
    );

    program.outputHelp();
}

export default details;