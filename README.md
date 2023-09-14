## @simon_he/qargs
Help you quickly process argv

## Install
```bash
npm i @simon_he/qargs
```

## Usage
```javascript
import { getArgs } from '@simon_he/qargs'

const args = getArgs()
// run --help
args.has('help') // true

// run --username simon_he
args.get('username') // simon_he

// run --username simon_he --password 123456
args.get(['username','password']) // [simon_he,123456]

// run find
args.hasCommand('find') // true
```

## Options
```typescript
{
    args: string[];
    rawArgs: string;
    options: Options[];
    commanders: string[];
    has: (key: string) => boolean;
    get: (key: string | string[]) => string | boolean | (string | boolean | undefined)[] | undefined;
    hasCommand: (key: string) => boolean;
}
```

## License
[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
