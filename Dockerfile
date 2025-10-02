# Use PHP with Apache
FROM php:8.2-apache

# Copy all project files into Apache’s root
COPY . /var/www/html/

# Expose Render's required port
EXPOSE 10000

# Start Apache in foreground
CMD ["apache2-foreground"]
