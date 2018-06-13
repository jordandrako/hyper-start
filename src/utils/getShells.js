const getShells = config => {
  const {shell, shellArgs, env, hyperStart} = config;
  const mainShell = [
    {
      name: 'Default Shell',
      shell: shell ? shell : '',
      shellArgs: shellArgs ? shellArgs : '',
      env: env ? env : ''
    }
  ];
  let otherShells = [];
  if (hyperStart && hyperStart.shells) {
    otherShells = hyperStart.shells;
  }
  const shells = mainShell.concat(otherShells);
  return shells;
};

export default getShells;
