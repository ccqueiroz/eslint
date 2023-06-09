# ESLINT Config

![npm](https://img.shields.io/npm/v/@caiocezarqueiroz/eslint-config)
[![License](https://img.shields.io/github/license/ccqueiroz/eslint)](LICENSE)
[![Repository](https://img.shields.io/badge/repository-GitHub-blue.svg)](https://github.com/ccqueiroz/eslint)
[![npm downloads](https://img.shields.io/npm/dw/@caiocezarqueiroz/eslint-config)](https://npm-stat.com/charts.html?package=eslint-config)

## Default configs
<ul>
    <li>Eslint configs recommended</li>
    <li>Typescript-Eslint configs recommended</li>
    <li>Prettier</li>
    <li>Jest recommended</li>
    <li>Vscode workspace settings for code formatting</li>
    <li>Editorconfig settings</li>
</ul>

## How to use?

### 1. Install the dependencies

<pre>
    npm install eslint jest @types/jest @caiocezarqueiroz/eslint-config --save-dev

    or

    yarn add eslint jest @types/jest @caiocezarqueiroz/eslint-config -D
</pre>

### 2. To use the <code>eslint</code> and <code>prettier</code>
#### 2.1. Create a <code>.eslintrc.json</code> file extending the config:
<pre>
{
    "extends": "@caiocezarqueiroz/eslint-config/settingsGenerator/eslint/node.js"
}
</pre>
#### 2.2. Add the <code>.prettier</code> command in the package.json scripts
<pre>
{
    "create-prettier-config": "node ./node_modules/@caiocezarqueiroz/eslint-config/settingsGenerator/prettier/index.js"
}
</pre>
#### 2.3. Run the <code>.prettier</code> command in the terminal with npm or yarn.
<pre>
{
    npm run create-prettier-config

    or

    yarn create-prettier-config
}
</pre>


### 3. To use <code>vscode workspace</code> settings
#### 3.1. Add the <code>create-workspace-vscode</code> command in the package.json scripts.
<pre>
{
    "create-workspace-vscode": "node ./node_modules/@caiocezarqueiroz/eslint-config/settingsGenerator/vscode/index.js"
}
</pre>
#### 3.2. Run the <code>create-workspace-vscode</code> command in the terminal with npm or yarn.
<pre>
{
    npm run create-workspace-vscode

    or

    yarn create-workspace-vscode
}
</pre>


### 4. To use <code>.editorconfig</code> settings
#### 4.1. Add the <code>.editorconfig</code> command in the package.json scripts.
<pre>
{
    "create-editor-config": "node ./node_modules/@caiocezarqueiroz/eslint-config/settingsGenerator/editorconfig/index.js"
}
</pre>
#### 4.2. Run the <code>.editorconfig</code> command in the terminal with npm or yarn.
<pre>
{
    npm run create-editor-config

    or

    yarn create-editor-config
}
</pre>



