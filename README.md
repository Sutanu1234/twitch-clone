# FullStack Twitch Clone: Next.js 14, Livestreaming, React, Prisma, Tailwind, MySQL & TypeScript

Credits: [Antonio Erdeljac](https://github.com/AntonioErdeljac)

Key Features:

- 📡 Streaming using RTMP / WHIP protocols
- 🌐 Generating ingress
- 🔗 Connecting Next.js app to OBS
- 🔐 Authentication wiyh Clerk
- 📸 Thumbnail upload with Uploadthing
- 👀 Live viewer count
- 🚦 Live statuses
- 💬 Real-time chat using sockets
- 🎨 Unique color for each viewer in chat
- 👥 Following system
- 🚫 Blocking system
- 👢 Kicking participants from a stream in real-time
- 🎛️ Streamer / Creator Dashboard
- 🐢 Slow chat mode
- 🔒 Followers only chat mode
- 📴 Enable / Disable chat
- 🔽 Collapsible layout (hide sidebars, chat etc, theatre mode etc.)
- 📚 Sidebar following & recommendations tab
- 🏠 Home page recommending streams, sorted by live first
- 🔍 Search results page with a different layout
- 🔄 Syncing user information to our DB using Webhooks
- 📡 Syncing live status information to our DB using Webhooks
- 🤝 Community tab
- 🎨 Beautiful design
- ⚡ Blazing fast application
- 📄 SSR (Server-Side Rendering)
- 🗺️ Grouped routes & layouts
- 🗃️ MySQL DB with Prisma

### TechStack
<img src = "https://img.icons8.com/?size=60&id=r2OarXWQc7B6&format=png&color=ffffff"/> <img src = "https://img.icons8.com/?size=60&id=Nlsua06Gvxel&format=png&color=000000"/> <img src = "https://img.icons8.com/?size=60&id=CIAZz2CYc6Kc&format=png&color=000000"/> <img src = "https://img.icons8.com/?size=60&id=UFXRpPFebwa2&format=png&color=000000"/> <img src = "https://img.icons8.com/?size=60&id=YKKmRFS8Utmm&format=png&color=000000"/> <img src = "https://img.icons8.com/?size=60&id=hsPbhkOH4FMe&format=png&color=000000"/> <a href="https://imgbb.com/"><img src="https://i.ibb.co/MDhc1T1J/clerk-logo-dark-accent.png" height=60></a> <img src = "https://github.com/user-attachments/assets/129e551e-069b-4474-917d-0288e7dba973" height=60/> <img src = "https://github.com/user-attachments/assets/e457c2b7-3d0f-4724-a46b-d756c0eaa2c5" height=60/> <img src = "https://cdn.prod.website-files.com/63ed4bc7a4b189da942a6b8c/63ef8624e010d9861920be4e_ngrok-favicon.svg" height=60/>


### Prerequisites

**Node version 18.17 or later**

### Cloning the Repository

```shell
git clone https://github.com/nayak-nirmalya/twitch-clone.git
```

### Install Packages

```shell
npm i
```

### Setup .env File

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=

DATABASE_URL=

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

### Setup Prisma

Add Database URL (PlanetScale/MySQL)

```shell
npx prisma generate
npx prisma db push
```

### Start the App

```shell
npm run dev
```

## Available Commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
| `lint`  | Run typescript lint check with eslint    |
| `build` | Start building app for deployment        |
| `start` | Run build version of app                 |
