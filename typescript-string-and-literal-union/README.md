# typescript-string-and-literal-union

## Quiz

When a union type of a primitive type is combined with literal types, TypeScript loses all information about the combined literals. Thus, when such type is used in an IDE with autocompletion, no suggestions are made for the declared literals.

```ts
type Pet = 'dog' | 'cat' | string;
```

![](./Screenshot1.png)

Try to fix the `Pet` type to support IDE autocompletion.

[![CodeSandbox](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/CompassChina/quiz/main/csb.json)](https://githubbox.com/CompassChina/quiz/tree/main/typescript-string-and-literal-union)
