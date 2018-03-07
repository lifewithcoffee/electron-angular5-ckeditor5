// const {app, BrowserWindow, Menu} = require('electron')
// const path = require('path')
// const url = require('url')
import {app, BrowserWindow, Menu, MenuItemConstructorOptions} from 'electron';
import * as path from 'path';
import * as url from 'url';

let win;

function createWindow() {
    win = new BrowserWindow({
        darkTheme: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff',
        // icon: `file://${__dirname}/dist/assets/logo.png`,
        icon: `file://${__dirname}/assets/logo.png`,
        resizable: true
    });

    win.webContents.openDevTools();

    // win.loadURL(`file://${__dirname}/dist/index.html`)
    win.loadURL(url.format({
        // pathname: path.join(__dirname, 'dist/index.html'),
        pathname: path.join(__dirname, '/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', function(){
        win = null;
    });
}

// const template = [
const template: MenuItemConstructorOptions[]
= [
    {
        label: 'View',
        submenu: [
            // { role: 'reload' }, //RL: don't work for electron with angular
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    {
        role: 'help',
        submenu: [
            { label: 'Learn More' },
            { label: 'RL Test' },
        ]
    }
];

Menu.setApplicationMenu(Menu.buildFromTemplate(template));

app.on('ready', createWindow);

app.on('window-all-closed', function(){

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function(){

    // for macOS
    if (win === null) {
        createWindow();
    }
});
