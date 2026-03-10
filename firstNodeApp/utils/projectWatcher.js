import chokidar from 'chokidar'
import fs from 'fs'
import path from 'path'
import os from 'os'

export default function ProjectWatcher(){
    const logFile = path.join("config","changeLogs.txt")

    const watchmen = chokidar.watch ("./", {
        ignored: ["node_modules", ".git", logFile],
        persistent:true,
        ignoreInitial:true,
        atomic:true
    });

console.log("Hostname: ", os.hostname(), "| Username: ", os.userInfo().username);
console.log("Processor: ", os.cpus()[0].model);
console.log("MAC Address: ", os.networkInterfaces()["Wi-Fi"][0].mac);
console.log("IP Address: ", os.networkInterfaces()["Wi-Fi"][3].family, os.networkInterfaces()["Wi-Fi"][3].address);

    watchmen
    .on("add", file => logChange("FILE CREATED", file))
    .on("change", file => logChange("FILE MODIFIED", file))
    .on("unlink", file => logChange("FILE DELETED", file))
    .on("addDir", dir => logChange("DIRECTORY CREATED", dir))
    .on("unlinkDir", dir => logChange("DIRECTORY DELETED", dir));

    function logChange(eventType, filePath){
            const time = new Date().toLocaleString();
            const osInfo = "OS: " + os.version() + os.arch() + "| Processor: " + os.cpus()[0].model;
            const userInfo = "Hostname: " + os.hostname() + "| Username: " + os.userInfo().username;
            const sysInfo = "MAC Address: " + os.networkInterfaces()["Wi-Fi"][0].mac + " | IP Address: " + os.networkInterfaces()["Wi-Fi"][3].family +  os.networkInterfaces()["Wi-Fi"][3].address;
            const logEntry = `\n${time} | ${eventType} | File Path: ${filePath} | ${sysInfo} | ${userInfo} | ${osInfo}`;

            fs.appendFile(logFile, logEntry, (err) => {
                if(err) console.error("Log Write Error: ", err);
            });
    }
    
}