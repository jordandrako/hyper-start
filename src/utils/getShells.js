import {merge} from 'lodash';

const getShells = config => {
  const {shell, shellArgs, env, hyperStart} = config;
  const mainShell = {
    default: {
      name: 'Default Shell',
      shell: shell ? shell : '',
      shellArgs: shellArgs ? shellArgs : '',
      env: env ? env : ''
    }
  };
  let otherShells = {};
  if (hyperStart && hyperStart.shells) {
    otherShells = hyperStart.shells;
  }
  const shells = merge(mainShell, otherShells);
  return shells;
};

export default getShells;
