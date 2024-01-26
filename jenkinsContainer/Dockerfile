FROM jenkins/jenkins:latest
# docker file for jenkins
# allow root access
USER root

# Install necessary tools and Docker
RUN apt-get update \
    && apt-get install -y docker.io \
    && rm -rf /var/lib/apt/lists/*

USER jenkins

# create image using 
# docker build -t my-jenkins -f jenkinsContainer/Dockerfile .
# use volume jenkins_home:/var/jenkins_home
# run using docker run -p 8080:8080 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock my-jenkins

