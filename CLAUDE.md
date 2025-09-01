# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a WordPress development environment using Docker Compose. The WordPress files are mounted locally in the `./wordpress` directory for direct editing.

## Docker Commands

### Starting the Environment
```bash
docker-compose up -d
```

### Stopping the Environment
```bash
docker-compose down
```

### Viewing Logs
```bash
docker-compose logs -f wordpress
docker-compose logs -f db
```

### Rebuilding Containers
```bash
docker-compose down
docker-compose up -d --build
```

## Project Structure

- `docker-compose.yml` - Docker configuration for WordPress and MySQL services
- `wordpress/` - Local WordPress installation directory (mounted to container)
  - `wp-admin/` - WordPress admin files
  - `wp-includes/` - WordPress core files
  - `wp-content/` - Themes, plugins, and uploads
    - `themes/` - WordPress themes
    - `plugins/` - WordPress plugins
    - `uploads/` - Media uploads (created after first upload)

## Development Configuration

- WordPress runs on `http://localhost:8000`
- Database credentials (as configured in docker-compose.yml):
  - Database name: `wordpress`
  - Username: `root`
  - Password: `root`
  - Host: `db` (from within WordPress container)

## Working with WordPress Files

All WordPress files are in the `./wordpress` directory. Changes made here are immediately reflected in the running container.

### Theme Development
Themes are located in `wordpress/wp-content/themes/`. To create a new theme, add a new directory here with at least:
- `style.css` (with theme header)
- `index.php`

### Plugin Development
Plugins are located in `wordpress/wp-content/plugins/`. To create a new plugin, add a new directory or PHP file with proper plugin headers.

### Configuration
The main WordPress configuration file is `wordpress/wp-config.php`. This file contains database settings and other WordPress constants.

## Important Notes

- The `wordpress/` directory is mounted as a volume, so changes persist between container restarts
- MySQL data is stored in a Docker volume `mysql_data` and persists between container restarts
- Always ensure containers are running before accessing the WordPress site