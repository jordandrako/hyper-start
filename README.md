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
    startShells: {
      cmd: {
        // unique key for the shell
        name: "cmd", // The name of the shell displayed when choosing.
        shell: "C:\\Windows\\System32\\cmd.exe", // Same as normal hyper shell config.
        shellArgs: [], // Same as normal hyper shellArgs config.
        env: [] // Same as normal hyper env config.
      }
    }
  }
  // rest of the file
};
```

**You can add multiple shell configs to the startShells object.**
