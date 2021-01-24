
{{ template:title }}

<p align="center">
    <a href="https://img.shields.io/npm/v/{{ pkg.name }}?style=flat-square?label=VERSION">NPM version</a>
    <a href="https://img.shields.io/bundlephobia/minzip/{{ pkg.name }}?label=SIZE&amp;style=flat-square">NPM size</a>
    <a href="https://img.shields.io/npm/types/{{ pkg.name }}?style=flat-square?label=WITH">NPM types</a>
    <a href="https://img.shields.io/npm/l/{{ pkg.name }}?label=LICENSE&amp;style=flat-square">NPM license</a>
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
