# Usa l'immagine base di Nginx
FROM nginx:latest

# Copia i file dalla cartella public alla directory di Nginx
COPY public/ /usr/share/nginx/html/

# Espone la porta 80
EXPOSE 80
