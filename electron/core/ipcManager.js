import { ipcMain } from "electron";

ipcMain.on("message", (event, msg) => {
  console.log("Message from react: ", msg);
});
