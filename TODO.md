# features

## Login

- [ ] Login page
- [ ] Register page
- [ ] Forgot password page
- [ ] Reset password page
- [ ] Logout

## Dashboard and Frame

- [ ] Dashboard page
- [ ] Past records page
- [ ] Spinner page
- [ ] Profile page
- [ ] Settings page
- [ ] Logout

## Explore

- [ ] Map page
- [ ] Ai page
- [ ] food delivery page

## folder structure

/app
├── (auth)
│ ├── login
│ │ └── page.tsx
│ ├── register
│ │ └── page.tsx
│ ├── forgot-password
│ │ └── page.tsx
│ └── reset-password
│ └── page.tsx
├── dashboard
│ ├── page.tsx
│ ├── past-records
│ │ └── page.tsx
│ ├── spinner
│ │ └── page.tsx
│ ├── profile
│ │ └── page.tsx
│ └── settings
│ └── page.tsx
├── explore
│ ├── map
│ │ └── page.tsx
│ ├── ai
│ │ └── page.tsx
│ └── food-delivery
│ └── page.tsx
├── api
│ └── auth
│ └── [...nextauth]
│ └── route.ts
├── components
│ ├── layout.tsx
│ └── navbar.tsx
├── lib
│ └── auth.ts
├── styles
│ └── globals.css
├── layout.tsx
└── page.tsx
