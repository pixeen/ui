
{{ template:title }}

<div style="text-align:center">
    ![NPM version](https://img.shields.io/npm/v/{{ pkg.name }}?style=flat-square?label=VERSION)
    ![NPM size](https://img.shields.io/bundlephobia/minzip/{{ pkg.name }}?label=SIZE&style=flat-square)
    ![NPM types](https://img.shields.io/npm/types/{{ pkg.name }}?style=flat-square?label=WITH)
    ![NPM license](https://img.shields.io/npm/l/{{ pkg.name }}?label=LICENSE&style=flat-square)
</div>

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
