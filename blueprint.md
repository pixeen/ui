
{{ template:title }}

<p align="center">
    <img src="https://img.shields.io/npm/v/{{ pkg.name }}?style=flat-square?label=VERSION" alt="NPM version</a>">
    <img src="https://img.shields.io/bundlephobia/minzip/{{ pkg.name }}?label=SIZE&style=flat-square" alt="NPM size</a>">
    <img src="https://img.shields.io/npm/types/{{ pkg.name }}?style=flat-square&label=WITH" alt="NPM types</a>">
    <img src="https://img.shields.io/npm/l/{{ pkg.name }}?label=LICENSE&style=flat-square" alt="NPM license</a>">
</p>

{{ template:description }}

{{ template:toc }}

## Getting Started

**Install**

```bash
yarn add {{ pkg.name }} goober
```

**Usage**

```typescript jsx
import { setup } from 'goober';
setup(React.createElement);
```

{{ load:EXAMPLES.md }}

{{ template:license }}
