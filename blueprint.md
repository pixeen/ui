{{ template:title }}
{{ template:badges }}
{{ template:description }}

{{ load:USAGE.md }}

## Getting Started

1. Install Component

```bash
yarn add {{ pkg.name }} goober
```

2. Import in your project & setup

```typescript jsx
import { setup } from 'goober';
setup(React.createElement);
```

3. Start using

{{ load:USAGE.md }}

{{ template:license }}
