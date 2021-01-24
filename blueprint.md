{{ template:title }}
{{ template:badges }}
{{ template:description }}

## Usage

{{ load:USAGE.md }}

## Getting Started

### Install Component

```bash
yarn add {{ pkg.name }} goober
```

### Import in your project

```typescript jsx
import { setup } from 'goober';
```

### Setup the component

```typescript jsx
setup(React.createElement);
```

{{ template:license }}
