import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    titlebarStyle: "hidden",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Load Next.js dev server
  const nextjsUrl = "http://localhost:3000";
  mainWindow.loadURL(nextjsUrl).catch((err) => {
    console.error("Failed to load Next.js dev server:", err);
    // Fallback: Show error page
    mainWindow?.loadFile(path.join(__dirname, "../out/error.html"));
  });

  // Open DevTools automatically in development
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }
  
  ipcMain.on("minimize-window", () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on("maximize-window", () => {
    if (mainWindow) {
      if (mainWindow.isMaximized()) {
        mainWindow.restore();
      } else {
        mainWindow.maximize();
      }
    }
  });

  ipcMain.on("close-window", () => {
    if (mainWindow) mainWindow.close();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});