import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  // You can expose APIs here if needed
});