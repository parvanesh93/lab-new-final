FROM nginx

ADD index.html /usr/share/nginx/html/
ADD ./.tmp/* /usr/share/nginx/html/

