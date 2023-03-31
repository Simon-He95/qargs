## q-args
Help you quickly process argv

## Install
```bash
npm i easy-args
```

## Usage
```bash
import easyArgs from 'easy-args'

const args = easyArgs()
// run --help
args.has('help') // true

// run --username simon_he
args.get('username') // simon_he

// run --username simon_he --password 123456
args.get(['username','password']) // [simon_he,123456]

// run find
args.hasCommand('find') // true
```

## License
[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
