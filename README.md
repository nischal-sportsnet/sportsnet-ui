# @sportsnet/ui

Shared UI library for Sportsnet projects. Provides design tokens, a Tailwind CSS preset, base styles, and React components to maintain consistent branding across all platforms (SIMS, EASY, Flipper, SFS, SEMS).

## Installation

```bash
# From GitHub
npm install git+https://github.com/nischal-sportsnet/sportsnet-ui.git

# Or link locally for development
cd /path/to/sportsnet-ui && npm link
cd /path/to/your-project && npm link @sportsnet/ui
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss
```

## Setup

### 1. Configure Tailwind

Add the preset and include the library in your content paths:

```js
// tailwind.config.js
const sportsnetPreset = require('@sportsnet/ui/tailwind-preset');

module.exports = {
  presets: [sportsnetPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sportsnet/ui/dist/**/*.{js,cjs}',
  ],
};
```

This extends your Tailwind config with:
- `brand-*` color palette (brand red)
- `surface-*` semantic colors (page, card, muted, hover, selected)
- System font stack
- Semantic z-index layers (`z-modal`, `z-dropdown`, `z-tooltip`, etc.)
- Semantic shadows (`shadow-card`, `shadow-dropdown`, `shadow-modal`)

### 2. Import Base Styles

Import in your app entry point to get base styles, component classes, and custom scrollbars:

```tsx
// main.tsx or App.tsx
import '@sportsnet/ui/styles';
```

This sets up:
- 14px base font size (compact, information-dense UI)
- System font stack
- Custom scrollbar styling
- All `sn-*` component CSS classes
- Google Places autocomplete styling

### 3. Import Components

```tsx
import { Button, Card, Modal, Input, Badge, Table } from '@sportsnet/ui';
```

## Components

### Button

```tsx
<Button variant="primary" size="md">Save</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="danger" loading>Deleting...</Button>
<Button variant="ghost">Options</Button>
<Button variant="success" size="lg">Confirm</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'ghost' \| 'success'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Shows spinner and disables button |

### Input

```tsx
<Input label="Email" placeholder="you@example.com" error="Required field" />
<Input label="Name" hint="As it appears on your ID" />
```

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Label text above the input |
| `error` | `string` | Error message (turns border red) |
| `hint` | `string` | Help text below input (hidden when error is shown) |

### Select

```tsx
<Select
  label="Country"
  placeholder="Select a country"
  options={[
    { value: 'au', label: 'Australia' },
    { value: 'nz', label: 'New Zealand' },
  ]}
/>
```

### Textarea

```tsx
<Textarea label="Notes" rows={5} hint="Optional" />
```

### Badge

```tsx
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Rejected</Badge>
<Badge variant="info">Sent</Badge>
<Badge variant="neutral">Draft</Badge>
```

### Card

```tsx
<Card>
  <CardHeader title="Revenue" subtitle="Last 30 days" action={<Button size="sm">Export</Button>} />
  <p>Card content here</p>
</Card>

<Card padded={false}>
  {/* Full-bleed content */}
</Card>
```

### Modal

```tsx
<Modal open={isOpen} onClose={() => setIsOpen(false)} size="lg">
  <ModalHeader title="Edit Profile" onClose={() => setIsOpen(false)} />
  <ModalBody>
    <Input label="Name" />
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button>Save</Button>
  </ModalFooter>
</Modal>
```

| Size | Max Width |
|------|-----------|
| `sm` | 448px |
| `md` | 512px |
| `lg` | 672px |
| `xl` | 896px |
| `full` | 1280px |

### Table

```tsx
<Table
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'status', header: 'Status', render: (row) => <Badge>{row.status}</Badge> },
  ]}
  data={items}
  keyExtractor={(row) => row.id}
  onRowClick={(row) => navigate(`/items/${row.id}`)}
  emptyMessage="No items found"
/>
```

### EmptyState

```tsx
<EmptyState
  title="No events found"
  description="Create your first event to get started."
  action={<Button>Create Event</Button>}
/>
```

### Spinner / LoadingOverlay

```tsx
<Spinner size="lg" />
<LoadingOverlay message="Fetching data..." />
```

### PageLayout / PageHeader / ContentArea

```tsx
<PageLayout>
  <ContentArea>
    <PageHeader
      title="Events"
      subtitle="Manage your events"
      actions={<Button>Create Event</Button>}
    />
    {/* Page content */}
  </ContentArea>
</PageLayout>
```

## CSS Utility Classes

When you import `@sportsnet/ui/styles`, you get these `sn-*` classes that can be used directly in markup without the React components:

| Class | Description |
|-------|-------------|
| `sn-btn` | Base button styles |
| `sn-btn-primary` | Dark button (gray-900) |
| `sn-btn-secondary` | Light gray button |
| `sn-btn-danger` | Red button |
| `sn-btn-ghost` | Transparent button |
| `sn-btn-success` | Green button |
| `sn-btn-sm / -md / -lg` | Button sizes |
| `sn-input` | Text input styling |
| `sn-textarea` | Textarea styling |
| `sn-select` | Select dropdown styling |
| `sn-label` | Form label styling |
| `sn-card` | Card with border and shadow |
| `sn-card-padded` | Card with padding |
| `sn-badge` | Badge base |
| `sn-badge-success / -warning / -error / -info / -neutral` | Badge variants |
| `sn-modal-backdrop` | Modal overlay |
| `sn-modal-container` | Modal wrapper |
| `sn-modal-panel` | Modal content box |
| `sn-table` | Styled table |
| `sn-page-title` | Page heading (text-2xl semibold) |
| `sn-section-header` | Section heading (text-lg semibold) |
| `sn-form-group` | Vertical form spacing |
| `sn-list-row` | Hoverable list row |

## Design Tokens

Import tokens directly for use in custom logic:

```tsx
import { colors, statusBadgeColors, marginColors } from '@sportsnet/ui/tokens';
import { fontFamily, baseFontSize, typographyPatterns } from '@sportsnet/ui/tokens';
import { zIndex, modalSize, iconSize, breakpoints } from '@sportsnet/ui/tokens';
import { tableConfig, formConfig, animationDuration } from '@sportsnet/ui/tokens';
```

### Status Badge Colors

Pre-defined Tailwind class strings for common statuses:

```tsx
import { statusBadgeColors } from '@sportsnet/ui/tokens';

// statusBadgeColors.rfp.APPROVED  → 'bg-green-100 text-green-800'
// statusBadgeColors.rfp.PENDING   → 'bg-yellow-100 text-yellow-800'
// statusBadgeColors.ticket.AVAILABLE → 'bg-green-100 text-green-800'

<span className={`sn-badge ${statusBadgeColors.rfp[status]}`}>{status}</span>
```

### Typography Patterns

Common text class combinations:

```tsx
import { typographyPatterns } from '@sportsnet/ui/tokens';

// typographyPatterns.pageTitle     → 'text-2xl font-semibold text-gray-900'
// typographyPatterns.formLabel     → 'text-sm font-medium text-gray-700'
// typographyPatterns.secondary     → 'text-sm text-gray-500'
```

## Brand Assets

Logo files are available in the `assets/` directory:

```
assets/
  favicon.ico
  logos/
    sims-logo.png          # 32x32 icon
    sims-320.png           # 320x87 full logo with text
    sportsnet-only-320.png # 320x70 Sportsnet wordmark
```

## Development

```bash
# Install dependencies
npm install

# Build library
npm run build

# Watch mode (rebuild on changes)
npm run dev
```

## Project Structure

```
src/
  components/     # React components (Button, Input, Modal, etc.)
  layouts/        # Page-level layout components
  styles/         # Base CSS with Tailwind @layer directives
  tokens/         # Design tokens (colors, typography, spacing)
  tailwind-preset.ts  # Tailwind CSS preset configuration
  index.ts        # Main entry point
assets/           # Logos, favicon
```

## License

UNLICENSED - Internal use only.
