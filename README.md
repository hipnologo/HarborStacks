# HarborStacks 🚢

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC)](https://tailwindcss.com/)
[![Node.js Version](https://img.shields.io/badge/node->=18-green)](https://nodejs.org)

HarborStacks is a modern, user-friendly web interface for deploying and managing Docker services through Portainer. It provides an intuitive installation wizard, real-time status updates, and comprehensive service management capabilities.

![HarborStacks Dashboard](./docs/images/dashboard.png)

## ✨ Features

### 🎯 Core Features
- **Visual Service Installer**: Step-by-step wizard for deploying Docker services
- **Real-time Monitoring**: Live status updates and progress tracking
- **Dark Mode Support**: Built-in theme switching capability
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🛠 Technical Features
- **Dynamic Form Generation**: Automatic configuration forms based on service requirements
- **Pre-flight Checks**: Environment validation before deployment
- **Error Recovery**: Automatic retry options and detailed error messages
- **API Integration**: Full Portainer API support for service management

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- Docker and Docker Swarm
- Portainer CE/EE installed
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hipnologo/harborstacks.git
cd harborstacks
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗 Project Structure

```
HarborStacks/
├── app/                    # Next.js app router pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── services/         # Service-related components
│   └── installers/       # Installation wizards
├── lib/                  # Utilities and configurations
│   ├── api/             # API integration
│   ├── types/           # TypeScript types
│   └── utils/           # Helper functions
└── public/              # Static assets
```

## 🔧 Configuration

### Environment Variables

```env
NEXT_PUBLIC_PORTAINER_URL=https://your-portainer-instance
NEXT_PUBLIC_API_VERSION=2.0
```

### Supported Services

- Traefik & Portainer
- Chatwoot
- MinIO
- n8n
- PostgreSQL
- MongoDB
- Redis
- And more...

## 📖 Documentation

Detailed documentation is available in the [docs](./docs) directory:

- [Installation Guide](./docs/installation.md)
- [Service Configuration](./docs/services.md)
- [API Reference](./docs/api.md)
- [Contributing Guide](./docs/contributing.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.

```text
Copyright 2024 HarborStacks

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## 🙏 Acknowledgments

- [Portainer](https://www.portainer.io/) for container management
- [Docker](https://www.docker.com/) for containerization
- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn/ui](https://ui.shadcn.com/) for UI components

## 🔗 Links

- [Website](https://harborstacks.dev)
- [Documentation](https://docs.harborstacks.dev)
- [Docker Hub](https://hub.docker.com/r/HarborStacks)
- [Issue Tracker](https://github.com/hipnologo/HarborStacks/issues)

## 📊 Status

- [![Build Status](https://img.shields.io/github/workflow/status/hipnologo/HarborStacks/CI)](https://github.com/hipnologo/HarborStacks/actions)
- [![Coverage Status](https://img.shields.io/codecov/c/github/hipnologo/HarborStacks)](https://codecov.io/gh/hipnologo/HarborStacks)
- [![Last Commit](https://img.shields.io/github/last-commit/hipnologo/HarborStacks)](https://github.com/hipnologo/HarborStacks/commits/main)

---

<p align="center">Made with ❤️ by the HarborStacks Team</p>
