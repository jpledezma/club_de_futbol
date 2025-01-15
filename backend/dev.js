import { exec } from "child_process";

exec("tsc", (err, stdout, stderr) => {
    console.log("Compiling typescript");
    if (err) {
        console.error(`Error compiling TypeScript: ${stderr}`);
        return;
    }
    console.log("Done");
    console.log("Running main.js");
    exec("node main.js", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error running main.js: ${stderr}`);
            return;
        }
    });
});