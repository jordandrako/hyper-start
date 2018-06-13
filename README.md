# hyper-start

- Simple configuration in `.hyper.js`

## Install

To install, execute:

```bash
hyper i hyper-start
```

Or edit `~/.hyper.js` manually and add `"hyper-start"` to `plugins`:

```js
plugins: [
  "hyper-start",
],
```

## Configure

Declare your shells in your hyper configuration (`~/.hyper.js`):

```js
module.exports = {
  config: {
    // rest of the config
    hyperStart: {
      shells: {
        // unique key for the shell
        cmd: {
          // The name of the shell displayed when choosing.
          name: 'cmd',
          // Same as normal hyper shell config.
          shell: 'C:\\Windows\\System32\\cmd.exe',
          // Same as normal hyper shellArgs config.
          shellArgs: [],
          // Same as normal hyper env config.
          env: [],
        },
      },
      hotkeys: {
        shellPicker: 'ctrl+alt+t', // ctrl+alt+t is the default keybinding.
      },
      askEveryTime: false, // If you should be prompted for the shell on every new window/tab.
    },
  },
  // rest of the file
};
```

**You can add multiple shell configs to the shells object.**
