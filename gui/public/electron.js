const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    var executablePath = `python ${path.join(__dirname,"../../backend/main.py")}`;
    // 'run.exe';
    var child = require('child_process').exec;
  console.log("executablePath==>",executablePath)
    // child(executablePath, function (err, data) {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log(data.toString());
    //   console.log("hello yassine awrak")
    // });
    mainWindow = new BrowserWindow({ 
        width: 1200, 
        height: 800,
        icon: ""
    });
     
    mainWindow.webContents.openDevTools()//
    // mainWindow.loadURL(
    //     isDev
    //     ? "http://localhost:3000"
    //     : `file://${path.join(__dirname, "../build/index.html")}`
    // );
     mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => {
      mainWindow = null
      if (process.platform !== "darwin") {
        app.quit();
        }
    });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});