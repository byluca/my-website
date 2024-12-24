# Usa l'immagine base di Nginx
FROM nginx:latest

# Copia il file index.html nella directory di Nginx
COPY index.html /usr/share/nginx/html/

# Espone la porta 80
EXPOSE 80
