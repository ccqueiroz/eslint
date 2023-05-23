## ESLINT Config

![npm](https://img.shields.io/npm/v/@caiocezarqueiroz/eslint-config)

[![License](https://img.shields.io/github/license/ccqueiroz/eslint)](LICENSE)
[![Repository](https://img.shields.io/badge/repository-GitHub-blue.svg)](https://github.com/ccqueiroz/eslint)


## Default configs
<ul>
    <li>Eslint configs recommended</li>
    <li>Typescript-Eslint configs recommended</li>
    <li>Prettier</li>
    <li>Jest recommended</li>
    <li>Vscode workspace settings for code formatting</li>
</ul>

## How to use?

### 1. Install the dependencies

<pre>
    npm install eslint @caiocezarqueiroz/eslint-config --save-dev

    or

    yarn add eslint @caiocezarqueiroz/eslint-config -D
</pre>

### 2. To use the eslint
#### 2.1. Create a <code>.eslintrc.json</code> file extending the config:
<pre>
{
    "extends": "@caiocezarqueiroz/eslint-config/node.js"
}
</pre>

### 3. To use vscode workspace settings
#### 3.1. Add the create-workspace-vscode command in the package.json scripts.
<pre>
{
    "create-workspace-vscode": "node ./node_modules/@caiocezarqueiroz/eslint-config/settings-vscode.js"
}
</pre>
#### 3.2. Run the create-workspace-vscode command in the terminal with npm or yarn.
<pre>
{
    npm run create-workspace-vscode

    or

    yarn create-workspace-vscode
}
</pre>



