
## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![Depfu](https://badges.depfu.com/badges/8c3eb57e3071a84365800f9101909750/overview.svg)](https://depfu.com/github/sloikaxyz/erc721-metadata-ajv?project_id=35805)


# @sloikaxyz/erc721-metadata-ajv

Reusable ERC721 [token](https://docs.opensea.io/docs/metadata-standards) and [contract]() metadata validators using [ajv.](https://ajv.js.org/)


## Usage/Examples

```typescript
import {
  ERC721TokenMetadata,
  createERC721TokenMetadataValidator,
} from '@sloikaxyz/erc721-metadata-ajv';

const validate = createERC721TokenMetadataValidator();

const res = await fetch(uri);
const metadata = await res.json(); // metadata is any here

const valid = validate(metadata);
if (!valid) {
  console.error(uri, 'failed ajv validation', validate.errors);
  throw new Error('Invalid token metadata');
}

// metadata is of type ERC721TokenMetadata here
console.log(metadata.name, metadata.description);
```


## Installation

```bash
npm install @sloikaxyz/erc721-metadata-ajv ajv ajv-formats
```


## Acknowledgements

 - [EIP 721](https://eips.ethereum.org/EIPS/eip-721), which outlines the metadata format
 - [OpenSea metadata documentation](https://docs.opensea.io/docs/metadata-standards)


## License

MIT License

Copyright (c) 2022 Sloika Industries, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

