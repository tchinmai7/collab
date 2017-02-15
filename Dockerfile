FROM node:boron
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install --global bower
RUN npm install --global grunt-cli
RUN apt-get install -y openssl
RUN \curl -L https://get.rvm.io | bash -s stable
RUN /bin/bash -l -c "rvm requirements"
RUN /bin/bash -l -c "rvm install 2.2"
RUN /bin/bash -l -c "gem install bundler --no-ri --no-rdoc"
RUN /bin/bash -l -c "gem install sass --no-ri --no-rdoc"
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN /bin/bash -l -c "bower install  --allow-root "
EXPOSE 9000 
ENV NODE_ENV production
ENTRYPOINT ["/usr/src/app/startserver.sh"]
