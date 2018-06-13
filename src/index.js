import {merge} from 'lodash';
import dm from './decorateMenu';

const defaultConfig = {
  hotkeys: {
    shellPicker: 'ctrl+alt+t'
  },
  askEveryTime: false
};

let config = defaultConfig;
let mainShell = {};

export const decorateConfig = mainConfig => {
  const {shell, shellArgs, env} = mainConfig;
  mainShell = {
    default: {
      name: 'Default Shell',
      shell,
      shellArgs,
      env
    }
  };
  config.shells = mainShell;

  if (mainConfig.hyperStart) {
    config = merge(mainConfig.hyperStart, JSON.parse(JSON.stringify(defaultConfig)));
    config.shells = mainShell;

    if (mainConfig.hyperStart.shells) {
      config.shells = merge(mainShell, mainConfig.hyperStart.shells);
    }
  }
  return mainConfig;
};

export const middleware = () => next => action => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      if (action.config.hyperStart) {
        config = merge(JSON.parse(JSON.stringify(defaultConfig)), action.config.hyperStart);
      }
      break;
  }
  return next(action);
};

export const decorateMenu = menu => dm(open, menu);
