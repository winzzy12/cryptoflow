# CryptoFlow - Development Guide

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup

```bash
# Clone repo
git clone https://github.com/winzzy12/cryptoflow.git
cd cryptoflow

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Run dev server
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
cryptoflow/
├── app/
│   ├── layout.tsx              # Root layout + providers
│   ├── page.tsx                # Dashboard
│   ├── globals.css             # Global styles
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio page
│   ├── analytics/
│   │   └── page.tsx            # Analytics page
│   └── settings/
│       └── page.tsx            # Settings page
├── components/
│   ├── Navbar.tsx              # Top navigation
│   └── Sidebar.tsx             # Side navigation
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Key Components

### Sidebar (`components/Sidebar.tsx`)
- Navigation menu
- Active route highlighting
- Logo and branding

### Navbar (`components/Navbar.tsx`)
- Wallet connection button
- Notifications
- Settings access

### Dashboard (`app/page.tsx`)
- Portfolio overview cards
- Portfolio value chart (Recharts)
- Assets table with real-time data

### Portfolio (`app/portfolio/page.tsx`)
- Asset allocation pie chart
- Quick actions (Send, Receive, Swap, Bridge)
- Transaction history

### Analytics (`app/analytics/page.tsx`)
- Price trends area chart
- Performance comparison bar chart
- Portfolio statistics
- Risk metrics

### Settings (`app/settings/page.tsx`)
- Dark mode toggle
- Notification preferences
- Security settings
- Wallet management

## Styling

### TailwindCSS Configuration
- Custom dark theme colors
- Crypto-specific color palette
- Glassmorphism effects
- Responsive breakpoints

### Custom CSS Classes
```css
.glass              /* Glassmorphism effect */
.glass-hover        /* Hover state */
.gradient-text      /* Gradient text */
.btn-primary        /* Primary button */
.btn-secondary      /* Secondary button */
.card               /* Card container */
.badge              /* Badge component */
.badge-success      /* Success badge */
.badge-danger       /* Danger badge */
.badge-warning      /* Warning badge */
```

## Data Flow

```
User Input
    ↓
Component State (useState)
    ↓
React Query (TanStack Query)
    ↓
API/Web3 Call
    ↓
Cache & Display
```

## Adding New Pages

1. Create folder in `app/` (e.g., `app/new-page/`)
2. Create `page.tsx` inside
3. Add route to Sidebar navigation
4. Import components as needed

Example:
```tsx
// app/new-page/page.tsx
'use client'

export default function NewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-dark-100">New Page</h1>
      {/* Content here */}
    </div>
  )
}
```

## Adding New Components

1. Create file in `components/` (e.g., `components/MyComponent.tsx`)
2. Use TypeScript for type safety
3. Import in pages as needed

Example:
```tsx
// components/MyComponent.tsx
'use client'

interface MyComponentProps {
  title: string
  value: number
}

export default function MyComponent({ title, value }: MyComponentProps) {
  return (
    <div className="card">
      <p className="text-dark-400">{title}</p>
      <p className="text-2xl font-bold text-dark-100">{value}</p>
    </div>
  )
}
```

## Web3 Integration

### Wagmi Setup (Future)
```tsx
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    // Component JSX
  )
}
```

### Viem for Contract Interaction (Future)
```tsx
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
```

## API Integration

### Using React Query
```tsx
import { useQuery } from '@tanstack/react-query'

export function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['assets'],
    queryFn: async () => {
      const res = await fetch('/api/assets')
      return res.json()
    }
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <div>{/* Render data */}</div>
}
```

## Building for Production

```bash
# Build
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
git push origin main
```

## Environment Variables

Required for production:
- `NEXT_PUBLIC_INFURA_KEY` - Infura API key
- `NEXT_PUBLIC_ALCHEMY_KEY` - Alchemy API key
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` - WalletConnect project ID

## Performance Tips

1. Use `'use client'` for interactive components
2. Lazy load heavy components with `dynamic()`
3. Optimize images with Next.js Image component
4. Use React Query for efficient data fetching
5. Memoize expensive computations with `useMemo`

## Debugging

### Browser DevTools
- React DevTools extension
- Network tab for API calls
- Console for errors

### Next.js Debug Mode
```bash
NODE_OPTIONS='--inspect' npm run dev
```

## Common Issues

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build -- --debug
```

## Contributing

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes
3. Commit: `git commit -m "Add my feature"`
4. Push: `git push origin feature/my-feature`
5. Open Pull Request

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Recharts Docs](https://recharts.org)
- [Wagmi Docs](https://wagmi.sh)
- [Viem Docs](https://viem.sh)

## Support

For issues, open GitHub issue or contact maintainer.
