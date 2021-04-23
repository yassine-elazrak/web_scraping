const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const {exec} = require('child_process');
let mainWindow;

// https://stackoverflow.com/questions/60544453/create-an-electron-js-desktop-app-with-python-and-react-js
// https://stackoverflow.com/questions/48669579/packaging-electron-app-powered-by-python-flask-electron
// https://stackoverflow.com/questions/51455898/how-to-package-an-electron-app-and-flask-server-into-one-executable
function createWindow() {
    var executablePath = `python ${path.join(__dirname,"../../backend/main.py")}`;
    // var executablePath = 'main.exe'
    // path.join(__dirname,'./main.exe')
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
        // exec('Taskkill /IM python.exe /F',(err, stdout, stderr)=>{
        
        // exec('Taskkill /IM main.exe /F',(err, stdout, stderr)=>{
        //   if(err)
        //     console.log(err)
        // })
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