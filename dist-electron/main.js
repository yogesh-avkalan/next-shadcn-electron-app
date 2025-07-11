"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let mainWindow = null;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            preload: path_1.default.join(__dirname, "preload.js"),
        },
    });
    // Load Next.js dev server
    const nextjsUrl = "http://localhost:3000";
    mainWindow.loadURL(nextjsUrl).catch((err) => {
        console.error("Failed to load Next.js dev server:", err);
        // Fallback: Show error page
        mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.loadFile(path_1.default.join(__dirname, "../out/error.html"));
    });
    // Open DevTools automatically in development
    if (process.env.NODE_ENV === "development") {
        mainWindow.webContents.openDevTools();
    }
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
electron_1.app.on("activate", () => {
    if (mainWindow === null)
        createWindow();
});
