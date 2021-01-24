{{ template:title }}
{{ template:badges }}
{{ template:description }}

{{ load:USAGE.md }}

## Getting Started

1. Install Component

```bash
yarn add {{ pkg.name }} goober
```

2. Import in your project

```typescript jsx
import { setup } from 'goober';
````

3. Initialize once

```typescript jsx
setup(React.createElement);
```

4. Start using

{{ load:USAGE.md }}

{{ template:license }}
