// import { contextBridge } from 'electron';

// contextBridge.exposeInMainWorld('electron', {
//   // You can expose APIs here if needed
// });


const { contextBridge, ipcRenderer } = require("electron");
// Expose the `update-css` event to the renderer process
window.electron = {
  onUpdateCSS: (callback) => {
    ipcRenderer.on('update-css', (_, cssPath) => {
      callback(cssPath);
    });
  },
};
contextBridge.exposeInMainWorld("electronAPI", {
  minimizeApp: () => ipcRenderer.send("minimize-window"),
  maximizeApp: () => ipcRenderer.send("maximize-window"),
  closeApp: () => ipcRenderer.send("close-window"),
});