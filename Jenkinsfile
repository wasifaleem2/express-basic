pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Run Docker Container') {
            steps {
                script {
                    def imageName = "wasifaleem/forjenkins-new-node-app"
                    def containerName = "basic-node-service"
                    docker.build(imageName)
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image(imageName).push()
                    }
                    sh "docker stop ${containerName} || true"
                    sh "docker rm ${containerName} || true"
                    docker.image(imageName).run("--name ${containerName} -p 8081:8081 -d")
                }
            }
        }
    }
}
