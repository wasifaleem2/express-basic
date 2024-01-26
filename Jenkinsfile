pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('switch to root') {
        //     steps {
        //         script {
        //             sh 'sudo su -'
        //         }
        //     }
        // }

        stage('Build and Run Docker Container') {
            steps {
                script {
                    def imageName = "wasifaleem/forjenkins-new-node-app"
                    docker.build(imageName)
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image(imageName).push()
                    }
                    docker.image(imageName).run('-p 8081:8081 -d')
                }
            }
        }
    }
}
