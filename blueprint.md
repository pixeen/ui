
{{ template:title }}

![NPM version](https://img.shields.io/npm/v/{{ pkg.name }}?style=flat-square)
![NPM size](https://img.shields.io/bundlephobia/minzip/{{ pkg.name }}?label=SIZE&style=flat-square)
![NPM types](https://img.shields.io/npm/types/{{ pkg.name }}?style=flat-square)
![NPM license](https://img.shields.io/npm/l/{{ pkg.name }}?label=LICENSE&style=flat-square)

{{ template:description }}

{{ template:toc }}

## Getting Started

**Add to your project**

```bash
yarn add {{ pkg.name }} goober
```

**Bootstrap setup**

```typescript jsx
import { setup } from 'goober';
setup(React.createElement);
```

{{ load:USAGE.md }}

{{ template:license }}
