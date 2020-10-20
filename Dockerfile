FROM node:8.4

RUN node -v && npm -v
#RUN npm install -g bower grunt-cli buffertools semver loopback-cli loopback-sdk-angular-cli --unsafe-perm
#RUN bower --version && grunt --version && semver --help
RUN ["mkdir", "/webarapp"]

ADD . /webarapp

WORKDIR /webarapp

RUN npm install

#RUN chmod 600 /webarapp/server/bootstrap/FastwebSSH/eloqua_sftp_id_rsa
#RUN chmod 600 /webarapp/server/bin/Sftp/FastwebSSH/eloqua_sftp_id_rsa

EXPOSE 3000-3001

ENTRYPOINT ["node", "."]
