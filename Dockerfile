FROM nginx

ADD ./dist/* /usr/share/nginx/html/
ADD ./index.html /usr/share/nginx/html/

RUN mv /usr/share/nginx/html/app*.js /usr/share/nginx/html/app.js && \
    mv /usr/share/nginx/html/style*.css /usr/share/nginx/html/style.css && \
    mv /usr/share/nginx/html/vendor*.js /usr/share/nginx/html/vendor.js
