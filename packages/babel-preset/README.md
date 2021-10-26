# @test/babel-preset

Automatically load the css for the @test design system.

## Installation

```sh
npm i --save-dev @test/babel-preset
# or
yarn add -D @test/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@test/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@test/card';
```

Output:

```js
import Card from '@test/card';
import '@test/card/dist/main.css';
```
