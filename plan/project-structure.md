# Project Structure

``` plaintext
📁 buildBytes/
├── 📁 frontend/                      # React Frontend
│   ├── 📁 public/
│   │   ├── 📄 index.html
│   │   └── 📁 assets/
│   ├── 📁 src/
│   │   ├── 📁 components/           # Reusable React components
│   │   │   ├── 📁 common/          # Shared components
│   │   │   ├── 📁 layout/          # Layout components
│   │   │   └── 📁 features/        # Feature-specific components
│   │   ├── 📁 pages/               # Page components
│   │   ├── 📁 hooks/               # Custom React hooks
│   │   ├── 📁 contexts/            # React contexts
│   │   ├── 📁 services/            # API services
│   │   ├── 📁 utils/               # Utility functions
│   │   ├── 📁 styles/              # Global styles
│   │   ├── 📁 assets/              # Static assets
│   │   ├── 📄 App.jsx
│   │   └── 📄 index.jsx
│   ├── 📄 package.json
│   └── 📄 vite.config.js
│
├── 📁 backend/                       # Django Backend
│   ├── 📁 buildBytes/               # Main Django project
│   │   ├── 📄 settings.py
│   │   ├── 📄 urls.py
│   │   └── 📄 wsgi.py
│   ├── 📁 apps/                     # Django apps
│   │   ├── 📁 accounts/            # User management
│   │   ├── 📁 courses/             # Course management
│   │   ├── 📁 projects/            # Project management
│   │   ├── 📁 community/           # Community features
│   │   └── 📁 resources/           # Learning resources
│   ├── 📁 media/                    # User uploaded content
│   ├── 📁 static/                   # Static files
│   ├── 📄 manage.py
│   └── 📄 requirements.txt
│
├── 📁 docs/                          # Documentation
├── 📄 .gitignore
├── 📄 README.md
└── 📄 docker-compose.yml
```
