import {merge} from 'lodash';
import dm from './decorateMenu';
import getShells from './utils/getShells';

const defaultConfig = {
  hotkeys: {
    shellPicker: 'ctrl+alt+t'
  },
  askEveryTime: false
};

let config = defaultConfig;

export const decorateConfig = mainConfig => {
  if (mainConfig.hyperStart) {
    config = merge(mainConfig.hyperStart, JSON.parse(JSON.stringify(defaultConfig)));
  }
  config.shells = getShells(mainConfig);
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
