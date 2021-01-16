const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRow')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log("index-ipcMain-inicio");
    console.log(paths)

    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupWords => event.reply('process-subtitles', groupWords))
  

    console.log("index-ipcMain-fim");
})