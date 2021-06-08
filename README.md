## Playing with particles

This project implements a particle system obeying simple physics.
Each particle has an associated ruleset, which can take any input as long as it's rules are able to produce a chaineable output.

For now, this just means a particle can be associated with an "attractor" rule or with a "repeller" rule.

## Setup

Compiled code is located in `./build`. You need to run a server (e.g. using `npx serve`) in order to load the page in `./src/index.html`.

## Development

The code is written in Typescript. This means that you should:
```bash
npm install typescript --save-dev
```
or:
```bash
yarn add typescript --dev
```

Afterwards, if using VSCode, <kbd>Shift</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd> should be enough to start the transpilation. If not, you can run instead:

```shell
npx tsc-watch
```
