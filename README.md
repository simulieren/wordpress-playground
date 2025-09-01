# WordPress Playground Development Environment

A Docker-based WordPress development environment for building and testing WordPress themes and plugins. Features a complete WordPress installation with MySQL database, mounted local files, and easy plugin development workflow.

## 🚀 Quick Start

```bash
# Start the environment
docker-compose up -d

# Access WordPress
open http://localhost:8000
```

## 📋 Requirements

- **Docker** 20.0+
- **Docker Compose** 1.27+
- **Web browser** for accessing WordPress

## 🛠️ Services

### WordPress
- **Image**: `wordpress:latest`
- **Port**: `8000`
- **URL**: http://localhost:8000
- **Files**: Mounted to `./wordpress/`

### MySQL Database
- **Image**: `mysql:5.7`
- **Database**: `wordpress`
- **Username**: `root`
- **Password**: `root`
- **Port**: `3306` (internal)

## 📁 Project Structure

```
wordpress-playground/
├── docker-compose.yml        # Docker services configuration
├── wordpress/                # WordPress installation (mounted)
│   ├── wp-admin/             # WordPress admin files
│   ├── wp-includes/          # WordPress core files
│   ├── wp-content/           # Themes, plugins, uploads
│   │   ├── themes/           # Custom themes
│   │   ├── plugins/          # Custom plugins
│   │   │   └── wp-multi-block-example/  # Example plugin
│   │   └── uploads/          # Media files
│   └── wp-config.php         # WordPress configuration
├── CLAUDE.md                 # Development guidelines
└── README.md                 # This file
```

## 🔧 Development Commands

### Environment Management
```bash
# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View logs
docker-compose logs -f wordpress
docker-compose logs -f db

# Rebuild containers
docker-compose down
docker-compose up -d --build
```

### Plugin Development
```bash
# Navigate to plugin directory
cd wordpress/wp-content/plugins/wp-multi-block-example

# Install dependencies
npm install

# Start development mode
npm run start

# Build for production
npm run build
```

## 🎯 Featured Plugin: Multi-Block Example

This environment includes a fully-featured accordion block plugin demonstrating:

- **Modern WordPress block development**
- **Multi-block architecture**
- **FAQ schema.org support**
- **Accessibility features**
- **Laravel-style documentation**

### Plugin Features
- 🎵 **Accordion Block** with collapsible content sections
- 🔍 **SEO Optimization** with FAQ schema markup
- 📱 **Responsive Design** for all devices
- ♿ **Accessibility** using semantic HTML5
- 🛠️ **Developer Tools** with hot reloading

## 🌐 WordPress Setup

### First Time Setup
1. **Start the environment**: `docker-compose up -d`
2. **Visit**: http://localhost:8000
3. **Complete WordPress installation**:
   - Database: `wordpress`
   - Username: `root`
   - Password: `root`
   - Database Host: `db`

### Admin Access
- **Admin URL**: http://localhost:8000/wp-admin
- **Use credentials** created during installation

## 📂 File Development

### Theme Development
```bash
# Themes location
./wordpress/wp-content/themes/

# Create new theme
mkdir ./wordpress/wp-content/themes/your-theme-name
```

### Plugin Development
```bash
# Plugins location
./wordpress/wp-content/plugins/

# Create new plugin
mkdir ./wordpress/wp-content/plugins/your-plugin-name
```

### Live Editing
- All files in `./wordpress/` are mounted to the container
- Changes are reflected immediately
- No container restart required for file changes

## 🔒 Database Access

### Connect to MySQL
```bash
# Using Docker exec
docker-compose exec db mysql -u root -p wordpress

# Using external MySQL client
Host: localhost
Port: 3306 (if port forwarding is enabled)
Database: wordpress
Username: root
Password: root
```

### Database Persistence
- Database data persists in Docker volume `mysql_data`
- Survives container restarts
- Remove volume to reset database: `docker volume rm wordpress-playground_mysql_data`

## 🐛 Troubleshooting

### Common Issues

**Port 8000 already in use**
```bash
# Find process using port
lsof -i :8000

# Kill process or change port in docker-compose.yml
```

**WordPress installation loop**
```bash
# Reset WordPress
rm wordpress/wp-config.php
docker-compose restart wordpress
```

**Database connection errors**
```bash
# Check database status
docker-compose logs db

# Restart database
docker-compose restart db
```

**File permission issues**
```bash
# Fix WordPress file permissions
sudo chown -R www-data:www-data wordpress/
sudo chmod -R 755 wordpress/
```

## 🔄 Data Management

### Backup
```bash
# Export database
docker-compose exec db mysqldump -u root -p wordpress > backup.sql

# Backup files
cp -r wordpress/ backup-wordpress/
```

### Restore
```bash
# Import database
docker-compose exec -T db mysql -u root -p wordpress < backup.sql

# Restore files
cp -r backup-wordpress/ wordpress/
```

### Reset Environment
```bash
# Complete reset
docker-compose down -v
rm -rf wordpress/
docker-compose up -d
```

## 🚀 Production Notes

### Environment Variables
- Set proper `WORDPRESS_DB_PASSWORD` in production
- Configure `WORDPRESS_TABLE_PREFIX` for security
- Use `WORDPRESS_CONFIG_EXTRA` for additional settings

### Security Considerations
- Change default database credentials
- Use strong passwords
- Implement proper file permissions
- Enable HTTPS in production

## 📚 Resources

- **WordPress Documentation**: https://developer.wordpress.org/
- **Block Editor Handbook**: https://developer.wordpress.org/block-editor/
- **Docker Documentation**: https://docs.docker.com/
- **Plugin Development**: See `./wordpress/wp-content/plugins/wp-multi-block-example/`

## 📄 License

This development environment is provided under the GPL v2 or later license, consistent with WordPress licensing.

---

**Happy WordPress Development!** 🎉