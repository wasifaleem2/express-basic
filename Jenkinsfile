pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('Build and Run Docker Container') {
        //     steps {
        //         script {
        //             def imageName = "wasifaleem/forjenkins-new-node-app:1"
        //             docker.build(imageName)
        //             docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
        //                 docker.image(imageName).push()
        //             }
        //             sh 'docker run -p 8081:8081 -d wasifaleem/forjenkins-new-node-app:1'
        //         }
        //     }
        // }
    }
}
