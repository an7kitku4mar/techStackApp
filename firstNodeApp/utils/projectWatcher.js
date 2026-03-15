import chokidar from 'chokidar'
import fs from 'fs'
import path from 'path'
import os from 'os'

export default function ProjectWatcher(){
    const backendLogDir = path.resolve("./config/logs")
    const frontendLogDir = path.resolve("../firstReactApp/config/logs")
    const backendLogFile = path.join(backendLogDir,"fsChangeLogs.txt")
    const frontendLogFile = path.join(frontendLogDir,"fsChangeLogs.txt")

    const backendPath = path.resolve("./");
    const frontendPath = path.resolve("../firstReactApp");

    const backendWatchmen = chokidar.watch (backendPath, {
        ignored: ["node_modules", ".git", backendLogFile],
        persistent:true,
        ignoreInitial:true,
        atomic:true
    });

    const frontendWatchmen = chokidar.watch (frontendPath, {
        ignored: ["node_modules", ".git", frontendLogFile],
        persistent:true,
        ignoreInitial:true,
        atomic:true
    });

    backendWatchmen
    .on("add", file => logBackend("FILE CREATED",file))
    .on("change", file => logBackend("FILE MODIFIED",file))
    .on("unlink", file => logBackend("FILE DELETED",file))
    .on("addDir", dir => logBackend("DIRECTORY CREATED",dir))
    .on("unlinkDir", dir => logBackend("DIRECTORY DELETED",dir))

    frontendWatchmen
    .on("add", file => logFrontend("FILE CREATED",file))
    .on("change", file => logFrontend("FILE MODIFIED",file))
    .on("unlink", file => logFrontend("FILE DELETED",file))
    .on("addDir", dir => logFrontend("DIRECTORY CREATED",dir))
    .on("unlinkDir", dir => logFrontend("DIRECTORY DELETED",dir))

    function buildLog(eventType,filePath){

        const time = new Date().toLocaleString()
        const osInfo = `OS:${os.version()} ${os.arch()} | CPU:${os.cpus()[0].model}`
        const userInfo = `Hostname:${os.hostname()} | User:${os.userInfo().username}`
        const net = os.networkInterfaces()["Wi-Fi"]
        const sysInfo = `MAC:${net[0].mac} | IP:${net.find(n=>n.family==="IPv4")?.address}`

        return `\n${time} | ${eventType} | File Path:${filePath} | ${sysInfo} | ${userInfo} | ${osInfo}`

    }

    function logBackend(eventType,filePath){

        const logEntry = buildLog(eventType,filePath)
        fs.appendFile(backendLogFile,logEntry,(err)=>{
            if(err) console.error("Backend Log Error:",err)
        })
    }
    
    function logFrontend(eventType,filePath){

        const logEntry = buildLog(eventType,filePath)
        fs.appendFile(frontendLogFile,logEntry,(err)=>{
            if(err) console.error("Frontend Log Error:",err)
        })
    }    
}