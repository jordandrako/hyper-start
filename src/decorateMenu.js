// import {app} from 'electron';
// import checkForMissingSettings from './lib/checkForMissingSettings';
// import {gistUrl, paths, possibleAccelerators} from './constants';

export default (menu = [], shells = []) => {
  const openShell = name => {
    shells.map(shell => {
      if (shell.name === name) {
        // add something like `launch shell.shell`
        // console.log(name);
      }
    });
  };

  const submenuItems = [];
  shells.map(shell => {
    submenuItems.push({
      label: shell.name,
      click: openShell(shell.name)
    });
  });

  const shellLauncher = () => {
    // console.log(submenuItems);
  };

  return menu.map(item => {
    if (item.label !== 'Plugins') return item;
    return {
      ...item,
      submenu: [
        ...item.submenu,
        {
          label: 'Pick Shell',
          type: 'submenu',
          submenu: submenuItems
        },
        {
          label: 'Shell Launcher',
          click: () => shellLauncher
        }
      ]
    };
  });
};
