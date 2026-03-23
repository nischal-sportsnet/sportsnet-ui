# @sportsnet/ui

Shared UI library for Sportsnet projects. Provides design tokens, a Tailwind CSS preset, base styles, and React components to maintain consistent branding across all platforms (SIMS, EASY, Flipper, SFS, SEMS).

**Version:** 0.1.1
**License:** UNLICENSED (internal use only)

---

## Table of Contents

- [Features Overview](#features-overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Tailwind CSS Preset](#tailwind-css-preset)
- [Base Styles (CSS Classes)](#base-styles-css-classes)
- [React Components](#react-components)
  - [Button](#button)
  - [Input](#input)
  - [Select](#select)
  - [Textarea](#textarea)
  - [Badge](#badge)
  - [Card](#card)
  - [Modal](#modal)
  - [Table](#table)
  - [EmptyState](#emptystate)
  - [Spinner / LoadingOverlay](#spinner--loadingoverlay)
- [Layout Components](#layout-components)
  - [PageLayout](#pagelayout)
  - [PageHeader](#pageheader)
  - [ContentArea](#contentarea)
- [Design Tokens](#design-tokens)
  - [Colors](#colors)
  - [Status Badge Colors](#status-badge-colors)
  - [Margin Colors](#margin-colors)
  - [Typography](#typography)
  - [Spacing, Sizing & Layout](#spacing-sizing--layout)
  - [Configuration Tokens](#configuration-tokens)
- [Brand Assets](#brand-assets)
- [Development](#development)
- [Publishing](#publishing)
- [Project Structure](#project-structure)

---

## Features Overview

| Category | What's Included |
|----------|----------------|
| **Tailwind Preset** | Brand colors, semantic surface colors, system font stack, z-index layers, semantic shadows |
| **Base CSS** | 30+ `sn-*` prefixed utility classes for buttons, inputs, cards, badges, modals, tables, typography, scrollbars |
| **React Components** | 10 typed components: Button, Input, Select, Textarea, Badge, Card, Modal, Table, EmptyState, Spinner |
| **Layout Components** | 3 layout primitives: PageLayout, PageHeader, ContentArea |
| **Design Tokens** | Exportable JS constants for colors, typography, spacing, z-index, breakpoints, icon sizes, modal sizes, status mappings |
| **Brand Assets** | Sportsnet and SIMS logos, favicon |

---

## Installation

```bash
npm install @sportsnet/ui
```

### Peer Dependencies

These must already be in your project:

```bash
npm install react react-dom tailwindcss
```

| Peer Dependency | Version |
|-----------------|---------|
| `react` | ^18.0.0 or ^19.0.0 |
| `react-dom` | ^18.0.0 or ^19.0.0 |
| `tailwindcss` | ^3.3.0 (optional if only using tokens) |

---

## Quick Start

Three steps to get everything working:

### Step 1: Add the Tailwind preset

```js
// tailwind.config.js
const sportsnetPreset = require('@sportsnet/ui/tailwind-preset');

module.exports = {
  presets: [sportsnetPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Include library classes so Tailwind generates them
    './node_modules/@sportsnet/ui/dist/**/*.{js,cjs}',
  ],
};
```

If your project uses ESM (`tailwind.config.ts`):

```ts
import sportsnetPreset from '@sportsnet/ui/tailwind-preset';

export default {
  presets: [sportsnetPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sportsnet/ui/dist/**/*.{js,cjs}',
  ],
};
```

### Step 2: Import base styles

Add this to your app entry point (`main.tsx`, `App.tsx`, or `index.tsx`):

```tsx
import '@sportsnet/ui/styles';
```

### Step 3: Use components

```tsx
import { Button, Input, Card, CardHeader, Badge } from '@sportsnet/ui';

function MyPage() {
  return (
    <Card>
      <CardHeader title="Create User" />
      <Input label="Full Name" placeholder="John Smith" />
      <Input label="Email" placeholder="john@example.com" />
      <div className="flex gap-3 mt-4">
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </div>
    </Card>
  );
}
```

---

## Tailwind CSS Preset

The preset extends your Tailwind theme with Sportsnet brand values. It's self-contained with no external dependencies.

### What the preset adds

**Brand colors** (`brand-*`):

```
brand-50  #fef2f2    brand-500  #ef4444
brand-100 #fee2e2    brand-600  #E31E24  (primary brand red)
brand-200 #fecaca    brand-700  #b91c1c
brand-300 #fca5a5    brand-800  #991b1b
brand-400 #f87171    brand-900  #7f1d1d
                     brand-950  #450a0a
```

Usage: `bg-brand-600`, `text-brand-700`, `border-brand-200`, etc.

**Semantic surface colors** (`surface-*`):

| Class | Value | Use case |
|-------|-------|----------|
| `bg-surface-page` | `#f9fafb` | Main page background |
| `bg-surface-card` | `#ffffff` | Card/panel backgrounds |
| `bg-surface-muted` | `#f3f4f6` | Secondary backgrounds |
| `bg-surface-hover` | `#f3f4f6` | Hover states |
| `bg-surface-selected` | `#eff6ff` | Selected/active items |

**Z-index layers**:

| Class | Value | Use case |
|-------|-------|----------|
| `z-dropdown` | 10 | Dropdown menus |
| `z-sticky` | 20 | Sticky headers |
| `z-fixed` | 30 | Fixed elements |
| `z-modal-backdrop` | 40 | Modal overlays |
| `z-modal` | 50 | Modal dialogs |
| `z-popover` | 60 | Popovers/tooltips |
| `z-tooltip` | 70 | Tooltips |
| `z-notification` | 80 | Toast notifications |

**Semantic shadows**:

| Class | Use case |
|-------|----------|
| `shadow-card` | Subtle card elevation |
| `shadow-dropdown` | Dropdown/popover panels |
| `shadow-modal` | Modal dialogs |

**Font family**: System font stack applied to `font-sans`.

---

## Base Styles (CSS Classes)

When you import `@sportsnet/ui/styles`, you get:

- **14px base font size** for compact, information-dense UIs
- **System font stack** on `body`
- **Custom scrollbars** (thin, gray, rounded)
- **Google Places autocomplete styling** (z-index, borders, hover states)
- **All `sn-*` CSS classes** listed below

These classes work in any HTML/JSX -- you don't need the React components to use them.

### Button classes

| Class | Description |
|-------|-------------|
| `sn-btn` | Base: flex, centered, rounded, focus ring, transition, disabled state |
| `sn-btn-primary` | Dark background (`gray-900`), white text |
| `sn-btn-secondary` | Light gray background, dark text |
| `sn-btn-danger` | Red background, white text |
| `sn-btn-ghost` | Transparent, hover shows gray background |
| `sn-btn-success` | Green background, white text |
| `sn-btn-sm` | Small: `px-3 py-1.5 text-sm` |
| `sn-btn-md` | Medium: `px-4 py-2 text-sm` |
| `sn-btn-lg` | Large: `px-6 py-3 text-base` |

```html
<button class="sn-btn-primary sn-btn-md">Save Changes</button>
<button class="sn-btn-ghost sn-btn-sm">Cancel</button>
```

### Form classes

| Class | Description |
|-------|-------------|
| `sn-input` | Full-width input with border, rounded, focus ring (`gray-900`) |
| `sn-textarea` | Same as `sn-input` with `resize-none` |
| `sn-select` | Same as `sn-input` with native select styling |
| `sn-label` | Block label: `text-sm font-medium text-gray-700 mb-1` |
| `sn-form-group` | Vertical spacing: `space-y-4` |

```html
<div class="sn-form-group">
  <div>
    <label class="sn-label">Email</label>
    <input class="sn-input" type="email" />
  </div>
  <div>
    <label class="sn-label">Message</label>
    <textarea class="sn-textarea" rows="4"></textarea>
  </div>
</div>
```

### Card classes

| Class | Description |
|-------|-------------|
| `sn-card` | White background, rounded-lg, border, shadow-sm |
| `sn-card-padded` | Same as `sn-card` with `p-4` |

### Badge classes

| Class | Description |
|-------|-------------|
| `sn-badge` | Base: inline-flex, `px-2.5 py-0.5`, rounded-full, text-xs, font-medium |
| `sn-badge-success` | Green background/text |
| `sn-badge-warning` | Yellow background/text |
| `sn-badge-error` | Red background/text |
| `sn-badge-info` | Blue background/text |
| `sn-badge-neutral` | Gray background/text |

```html
<span class="sn-badge-success">Active</span>
<span class="sn-badge-error">Overdue</span>
```

### Modal classes

| Class | Description |
|-------|-------------|
| `sn-modal-backdrop` | Fixed overlay, gray-500 at 75% opacity, z-40 |
| `sn-modal-container` | Fixed full-screen container, z-50, scrollable |
| `sn-modal-panel` | White panel with rounded corners, shadow-xl, transition |

### Table classes

| Class | Description |
|-------|-------------|
| `sn-table` | Full-width, divided rows |
| `sn-table thead` | Gray-50 background |
| `sn-table th` | Uppercase, small, gray-500 text, tracking-wider |
| `sn-table td` | Standard cell padding, text-sm |
| `sn-table tbody tr` | Bottom border, hover:bg-gray-50 |

```html
<table class="sn-table">
  <thead><tr><th>Name</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>Item 1</td><td><span class="sn-badge-success">Active</span></td></tr>
  </tbody>
</table>
```

### Typography classes

| Class | Description |
|-------|-------------|
| `sn-page-title` | `text-2xl font-semibold text-gray-900` |
| `sn-section-header` | `text-lg font-semibold text-gray-900` |

### List classes

| Class | Description |
|-------|-------------|
| `sn-list-row` | Flex row with hover:bg-gray-50, cursor-pointer |
| `sn-list-row-selected` | Blue-50 background for selected state |

---

## React Components

All components are fully typed with TypeScript and support ref forwarding where applicable. They also accept all native HTML attributes via spread props.

### Button

A styled button with variants, sizes, and a loading state.

```tsx
import { Button } from '@sportsnet/ui';

<Button>Default Primary</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="danger" onClick={handleDelete}>Delete</Button>
<Button variant="ghost">More Options</Button>
<Button variant="success" size="lg">Confirm Booking</Button>
<Button loading disabled>Saving...</Button>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'ghost' \| 'success'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Shows a spinner icon and disables the button |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | `''` | Additional CSS classes |
| `...rest` | `ButtonHTMLAttributes` | - | All native button props (onClick, type, etc.) |

---

### Input

A text input with optional label, error state, and hint text. Supports ref forwarding for use with React Hook Form.

```tsx
import { Input } from '@sportsnet/ui';

// Basic
<Input label="Email" placeholder="you@example.com" />

// With error
<Input label="Email" value="" error="Email is required" />

// With hint
<Input label="ABN" hint="11 digit Australian Business Number" />

// With React Hook Form
<Input label="Name" {...register('name')} error={errors.name?.message} />
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text rendered above the input |
| `error` | `string` | - | Error message (shows red border and error text) |
| `hint` | `string` | - | Help text below input (hidden when error is present) |
| `className` | `string` | `''` | Additional CSS classes for the input element |
| `...rest` | `InputHTMLAttributes` | - | All native input props (type, placeholder, onChange, etc.) |

---

### Select

A styled select dropdown with label and error support.

```tsx
import { Select } from '@sportsnet/ui';

<Select
  label="Country"
  placeholder="Select a country"
  options={[
    { value: 'au', label: 'Australia' },
    { value: 'nz', label: 'New Zealand' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
  onChange={(e) => setCountry(e.target.value)}
/>

// With error
<Select
  label="Role"
  options={roles}
  error="Please select a role"
/>

// With disabled options
<Select
  label="Plan"
  options={[
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise', disabled: true },
  ]}
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text |
| `options` | `SelectOption[]` | required | Array of `{ value, label, disabled? }` |
| `placeholder` | `string` | - | Disabled placeholder option text |
| `error` | `string` | - | Error message |
| `...rest` | `SelectHTMLAttributes` | - | All native select props |

---

### Textarea

A styled textarea with label, error, and hint support.

```tsx
import { Textarea } from '@sportsnet/ui';

<Textarea label="Description" rows={5} placeholder="Enter details..." />
<Textarea label="Notes" hint="Optional - max 500 characters" />
<Textarea label="Bio" error="Bio is too long" />
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text |
| `error` | `string` | - | Error message |
| `hint` | `string` | - | Help text (hidden when error present) |
| `rows` | `number` | `3` | Number of visible rows |
| `...rest` | `TextareaHTMLAttributes` | - | All native textarea props |

---

### Badge

A small status indicator pill.

```tsx
import { Badge } from '@sportsnet/ui';

<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending Review</Badge>
<Badge variant="error">Rejected</Badge>
<Badge variant="info">Sent</Badge>
<Badge variant="neutral">Draft</Badge>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'neutral'` | Color variant |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | required | Badge text |

---

### Card

A container with border, shadow, and optional padding.

```tsx
import { Card, CardHeader } from '@sportsnet/ui';

// Simple card
<Card>
  <p>Some content</p>
</Card>

// Card with header and action
<Card>
  <CardHeader
    title="Revenue Summary"
    subtitle="Last 30 days"
    action={<Button size="sm" variant="ghost">Export</Button>}
  />
  <p>Revenue chart goes here</p>
</Card>

// Unpadded card (for full-bleed content like tables)
<Card padded={false}>
  <table className="sn-table">...</table>
</Card>
```

**Card Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padded` | `boolean` | `true` | Whether to add `p-4` padding |
| `className` | `string` | `''` | Additional CSS classes |

**CardHeader Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Header title text |
| `subtitle` | `string` | - | Smaller text below the title |
| `action` | `ReactNode` | - | Action element (button, link, etc.) aligned to the right |

---

### Modal

A dialog overlay with backdrop, escape-to-close, and scroll lock.

```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@sportsnet/ui';

function EditModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} size="lg">
      <ModalHeader title="Edit Hotel" onClose={onClose} />
      <ModalBody>
        <div className="sn-form-group">
          <Input label="Hotel Name" />
          <Input label="Location" />
          <Textarea label="Description" rows={4} />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </ModalFooter>
    </Modal>
  );
}
```

**Modal Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | required | Whether the modal is visible |
| `onClose` | `() => void` | required | Called on backdrop click or Escape key |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Maximum width of the modal panel |

**Modal sizes:**

| Size | Max Width | Typical use |
|------|-----------|-------------|
| `sm` | 448px | Confirmations, simple forms |
| `md` | 512px | Standard forms |
| `lg` | 672px | Complex forms, previews |
| `xl` | 896px | Data tables, multi-column layouts |
| `full` | 1280px | Full editors, dashboards |

**ModalHeader Props:**

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Modal title |
| `onClose` | `() => void` | Shows a close (X) button when provided |

**ModalBody** and **ModalFooter** accept `children` and optional `className`.

**Behavior:**
- Pressing `Escape` calls `onClose`
- Clicking the backdrop calls `onClose`
- Body scroll is locked while modal is open
- Focus is trapped within the modal

---

### Table

A generic, typed data table with custom cell rendering and row click support.

```tsx
import { Table, Badge } from '@sportsnet/ui';

interface Event {
  id: string;
  name: string;
  date: string;
  status: string;
}

const columns = [
  { key: 'name', header: 'Event Name' },
  { key: 'date', header: 'Date' },
  {
    key: 'status',
    header: 'Status',
    className: 'w-32',
    render: (row: Event) => (
      <Badge variant={row.status === 'ACTIVE' ? 'success' : 'neutral'}>
        {row.status}
      </Badge>
    ),
  },
];

<Table<Event>
  columns={columns}
  data={events}
  keyExtractor={(row) => row.id}
  onRowClick={(row) => navigate(`/events/${row.id}`)}
  emptyMessage="No events found. Create your first event to get started."
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn<T>[]` | required | Column definitions |
| `data` | `T[]` | required | Array of row data |
| `keyExtractor` | `(row: T) => string` | required | Returns a unique key for each row |
| `onRowClick` | `(row: T) => void` | - | Row click handler (adds cursor-pointer) |
| `emptyMessage` | `string` | `'No data found'` | Message when data array is empty |

**TableColumn<T>:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` | Property name or unique key |
| `header` | `string` | Column header text |
| `render` | `(row: T) => ReactNode` | Custom cell renderer (uses `row[key]` if not provided) |
| `className` | `string` | Additional classes for th/td |

---

### EmptyState

A centered placeholder for when there's no data to display.

```tsx
import { EmptyState, Button } from '@sportsnet/ui';

// Basic
<EmptyState title="No results found" />

// With description and action
<EmptyState
  title="No events yet"
  description="Create your first event to start managing RFPs and hotel submissions."
  action={<Button>Create Event</Button>}
/>

// For search results
<EmptyState
  title="No results found"
  description="Try adjusting your search or filter criteria."
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'No data found'` | Main heading |
| `description` | `string` | - | Supporting text |
| `action` | `ReactNode` | - | Action button or link |

---

### Spinner / LoadingOverlay

Loading indicators in various sizes.

```tsx
import { Spinner, LoadingOverlay } from '@sportsnet/ui';

// Inline spinner
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

// Full section loading state
<LoadingOverlay message="Loading events..." />
<LoadingOverlay message="Saving changes..." />
<LoadingOverlay /> {/* Defaults to "Loading..." */}
```

**Spinner Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Spinner size (16/24/32/48px) |
| `className` | `string` | `''` | Additional CSS classes |

**LoadingOverlay Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `'Loading...'` | Text below the spinner |

---

## Layout Components

Higher-level components for structuring pages consistently.

### PageLayout

Full-page wrapper that sets the standard page background.

```tsx
import { PageLayout } from '@sportsnet/ui';

<PageLayout>
  {/* Sidebar, nav, content, etc. */}
</PageLayout>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional classes |
| `children` | `ReactNode` | required | Page content |

### PageHeader

Standard page title bar with optional subtitle and action buttons.

```tsx
import { PageHeader, Button } from '@sportsnet/ui';

<PageHeader
  title="Hotel Management"
  subtitle="View and manage partner hotels"
  actions={
    <>
      <Button variant="secondary" size="sm">Export</Button>
      <Button size="sm">Add Hotel</Button>
    </>
  }
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Page title (rendered as h1) |
| `subtitle` | `string` | - | Description below the title |
| `actions` | `ReactNode` | - | Right-aligned action buttons |

### ContentArea

A padded content wrapper.

```tsx
import { ContentArea } from '@sportsnet/ui';

<ContentArea>
  {/* padded content */}
</ContentArea>

<ContentArea padded={false}>
  {/* full-bleed content */}
</ContentArea>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padded` | `boolean` | `true` | Adds `px-6 py-6` padding |

### Full page example

```tsx
import { PageLayout, ContentArea, PageHeader, Card, CardHeader, Table, Button } from '@sportsnet/ui';

function EventsPage() {
  return (
    <PageLayout>
      <ContentArea>
        <PageHeader
          title="Events"
          subtitle="Manage your events and RFPs"
          actions={<Button>Create Event</Button>}
        />
        <Card padded={false}>
          <Table columns={columns} data={events} keyExtractor={(e) => e.id} />
        </Card>
      </ContentArea>
    </PageLayout>
  );
}
```

---

## Design Tokens

Design tokens are plain JavaScript constants that you can import and use in your own logic, conditional rendering, or custom components.

```tsx
import { colors, statusBadgeColors, marginColors } from '@sportsnet/ui/tokens';
import { fontFamily, baseFontSize, fontSize, fontWeight, typographyPatterns } from '@sportsnet/ui/tokens';
import { zIndex, breakpoints, borderRadius, boxShadow, animationDuration } from '@sportsnet/ui/tokens';
import { iconSize, modalSize, tableConfig, formConfig } from '@sportsnet/ui/tokens';
```

### Colors

```tsx
import { colors } from '@sportsnet/ui/tokens';

colors.brand.600      // '#E31E24' (primary brand red)
colors.primary.900    // '#111827' (primary UI dark)
colors.surface.page   // '#f9fafb'
colors.surface.card   // '#ffffff'
colors.border.DEFAULT // '#e5e7eb'
colors.text.primary   // '#111827'
colors.text.secondary // '#6b7280'
colors.text.link      // '#2563eb'

colors.status.success.DEFAULT  // '#16a34a'
colors.status.error.badge.bg   // '#fee2e2'
colors.status.error.badge.text // '#991b1b'
```

### Status Badge Colors

Pre-built Tailwind class strings for status badges, keyed by status value:

```tsx
import { statusBadgeColors } from '@sportsnet/ui/tokens';

// RFP statuses
statusBadgeColors.rfp.DRAFT       // 'bg-gray-100 text-gray-800'
statusBadgeColors.rfp.SENT        // 'bg-blue-100 text-blue-800'
statusBadgeColors.rfp.PENDING     // 'bg-yellow-100 text-yellow-800'
statusBadgeColors.rfp.RECEIVED    // 'bg-purple-100 text-purple-800'
statusBadgeColors.rfp.REVIEWING   // 'bg-orange-100 text-orange-800'
statusBadgeColors.rfp.APPROVED    // 'bg-green-100 text-green-800'
statusBadgeColors.rfp.REJECTED    // 'bg-red-100 text-red-800'
statusBadgeColors.rfp.CANCELLED   // 'bg-gray-100 text-gray-800'

// Ticket statuses
statusBadgeColors.ticket.AVAILABLE // 'bg-green-100 text-green-800'
statusBadgeColors.ticket.BLOCKED   // 'bg-orange-100 text-orange-800'
statusBadgeColors.ticket.SOLD      // 'bg-blue-100 text-blue-800'
statusBadgeColors.ticket.CANCELLED // 'bg-gray-100 text-gray-800'

// Collection statuses
statusBadgeColors.collection.DRAFT     // 'bg-gray-100 text-gray-800'
statusBadgeColors.collection.PUBLISHED // 'bg-green-100 text-green-800'
statusBadgeColors.collection.ARCHIVED  // 'bg-orange-100 text-orange-800'

// Usage
<span className={`sn-badge ${statusBadgeColors.rfp[rfp.status]}`}>
  {rfp.status}
</span>
```

### Margin Colors

Color thresholds for margin indicators:

```tsx
import { marginColors } from '@sportsnet/ui/tokens';

// marginColors.excellent  → { min: 30, class: 'text-green-600' }
// marginColors.good       → { min: 20, class: 'text-blue-600' }
// marginColors.acceptable → { min: 15, class: 'text-yellow-600' }
// marginColors.low        → { min: 10, class: 'text-orange-600' }
// marginColors.poor       → { min: 0,  class: 'text-red-600' }

function getMarginClass(margin: number): string {
  if (margin >= marginColors.excellent.min) return marginColors.excellent.class;
  if (margin >= marginColors.good.min) return marginColors.good.class;
  if (margin >= marginColors.acceptable.min) return marginColors.acceptable.class;
  if (margin >= marginColors.low.min) return marginColors.low.class;
  return marginColors.poor.class;
}
```

### Typography

```tsx
import { fontFamily, baseFontSize, fontSize, fontWeight, typographyPatterns } from '@sportsnet/ui/tokens';

baseFontSize  // '14px'

fontFamily.sans  // ['system-ui', '-apple-system', ...]

fontSize.xs     // ['0.75rem', { lineHeight: '1rem' }]
fontSize.sm     // ['0.875rem', { lineHeight: '1.25rem' }]
fontSize.base   // ['1rem', { lineHeight: '1.5rem' }]
fontSize.lg     // ['1.125rem', { lineHeight: '1.75rem' }]
fontSize.xl     // ['1.25rem', { lineHeight: '1.75rem' }]
fontSize['2xl'] // ['1.5rem', { lineHeight: '2rem' }]

fontWeight.normal    // '400'
fontWeight.medium    // '500'
fontWeight.semibold  // '600'
fontWeight.bold      // '700'

// Pre-built class patterns
typographyPatterns.pageTitle      // 'text-2xl font-semibold text-gray-900'
typographyPatterns.sectionHeader  // 'text-lg font-semibold text-gray-900'
typographyPatterns.formLabel      // 'text-sm font-medium text-gray-700'
typographyPatterns.body           // 'text-sm text-gray-700'
typographyPatterns.secondary      // 'text-sm text-gray-500'
typographyPatterns.tertiary       // 'text-xs text-gray-400'
typographyPatterns.caption        // 'text-xs text-gray-500'
```

### Spacing, Sizing & Layout

```tsx
import { zIndex, breakpoints, borderRadius, boxShadow, animationDuration, iconSize, modalSize } from '@sportsnet/ui/tokens';

// Z-index
zIndex.dropdown       // 10
zIndex.modal          // 50
zIndex.notification   // 80

// Breakpoints (px)
breakpoints.sm   // 640
breakpoints.md   // 768
breakpoints.lg   // 1024
breakpoints.xl   // 1280
breakpoints['2xl'] // 1536

// Border radius
borderRadius.sm    // '0.25rem'
borderRadius.md    // '0.375rem'
borderRadius.lg    // '0.5rem'
borderRadius.xl    // '0.75rem'
borderRadius.full  // '9999px'

// Box shadows
boxShadow.sm  // '0 1px 2px 0 rgb(0 0 0 / 0.05)'
boxShadow.md  // '0 4px 6px -1px rgb(0 0 0 / 0.1), ...'
boxShadow.lg  // '0 10px 15px -3px rgb(0 0 0 / 0.1), ...'
boxShadow.xl  // '0 20px 25px -5px rgb(0 0 0 / 0.1), ...'

// Animation durations (ms)
animationDuration.instant  // 0
animationDuration.fast     // 150
animationDuration.normal   // 300
animationDuration.slow     // 500

// Icon sizes (Tailwind classes)
iconSize.xs    // 'h-3 w-3'   (12px)
iconSize.sm    // 'h-4 w-4'   (16px)
iconSize.md    // 'h-5 w-5'   (20px)
iconSize.lg    // 'h-6 w-6'   (24px)
iconSize.xl    // 'h-8 w-8'   (32px)
iconSize['2xl'] // 'h-10 w-10' (40px)

// Modal sizes (Tailwind classes)
modalSize.sm    // 'max-w-md'   (448px)
modalSize.md    // 'max-w-lg'   (512px)
modalSize.lg    // 'max-w-2xl'  (672px)
modalSize.xl    // 'max-w-4xl'  (896px)
modalSize.full  // 'max-w-7xl'  (1280px)
```

### Configuration Tokens

```tsx
import { tableConfig, formConfig } from '@sportsnet/ui/tokens';

// Table
tableConfig.defaultPageSize   // 20
tableConfig.pageSizeOptions   // [20, 50, 100]
tableConfig.mobileBreakpoint  // 768
tableConfig.checkboxWidth     // 'w-12'
tableConfig.actionsWidth      // 'w-32'

// Form
formConfig.debounceDelay    // 300 (ms)
formConfig.autosaveDelay    // 1000 (ms)
formConfig.maxFileSize      // 10485760 (10MB)
formConfig.textareaMinRows  // 3
formConfig.textareaMaxRows  // 10
```

---

## Brand Assets

Logos and favicon are shipped in the `assets/` directory of the package:

```
node_modules/@sportsnet/ui/assets/
  favicon.ico                     # Browser tab icon
  logos/
    sims-logo.png                 # 32x32 SIMS icon mark
    sims-320.png                  # 320x87 SIMS full logo with text
    sportsnet-only-320.png        # 320x70 Sportsnet wordmark
```

To use in your project:

```tsx
// Import directly
import simsLogo from '@sportsnet/ui/assets/logos/sims-logo.png';

<img src={simsLogo} alt="SIMS" width={32} height={32} />
```

Or copy the favicon to your `public/` directory during build.

---

## Development

### Prerequisites

- Node.js >= 18
- npm >= 9

### Commands

```bash
# Install dependencies
npm install

# Build the library (type-check + Vite build)
npm run build

# Watch mode (rebuild on file changes)
npm run dev
```

### Build output

After running `npm run build`, the `dist/` directory contains:

```
dist/
  index.js              # ESM bundle (components + layouts + tokens)
  index.cjs             # CJS bundle
  index.d.ts            # TypeScript declarations
  tailwind-preset.js    # ESM preset (self-contained)
  tailwind-preset.cjs   # CJS preset (self-contained)
  tokens/
    index.js / index.cjs  # Standalone tokens bundle
  styles/
    index.css             # Base styles CSS
  components/             # Component type declarations
  layouts/                # Layout type declarations
```

---

## Publishing

To publish a new version to npm:

1. Update the version in `package.json`
2. Run `npm publish --access public`
3. Commit and push to GitHub

The `prepublishOnly` script automatically runs `npm run build` before publishing.

---

## Project Structure

```
@sportsnet/ui/
  src/
    components/           # React components
      Button.tsx
      Input.tsx
      Select.tsx
      Textarea.tsx
      Badge.tsx
      Card.tsx
      Modal.tsx
      Table.tsx
      EmptyState.tsx
      Spinner.tsx
      index.ts            # Component barrel exports
    layouts/              # Page-level layout components
      PageLayout.tsx
      index.ts
    styles/
      index.css           # Base CSS with Tailwind @layer directives
    tokens/               # Design tokens (plain JS constants)
      colors.ts
      typography.ts
      spacing.ts
      index.ts
    tailwind-preset.ts    # Tailwind CSS preset (self-contained)
    index.ts              # Main library entry point
  assets/
    favicon.ico
    logos/
      sims-logo.png
      sims-320.png
      sportsnet-only-320.png
  dist/                   # Built output (generated)
  package.json
  tsconfig.json
  vite.config.ts
  tailwind.config.js
  postcss.config.js
```

---

## Changelog

### 0.1.1
- Fixed Tailwind preset to be self-contained (no cross-module require issues)
- Works correctly with both CJS (`require()`) and ESM (`import`) configs

### 0.1.0
- Initial release
- 10 React components, 3 layout components
- Tailwind CSS preset with brand colors, surfaces, z-index, shadows
- 30+ CSS utility classes
- Full design token system
- Brand assets (logos, favicon)
