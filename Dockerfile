FROM php:8.2-apache

# Copy project files into Apache root
COPY . /var/www/html/

# Render requires port 10000
EXPOSE 10000

# Set Render's PORT dynamically
ENV PORT=10000
RUN sed -i "s/80/${PORT}/g" /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf

# Start Apache
CMD ["apache2-foreground"]
