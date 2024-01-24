pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker ps'
                }
            }
        }

        // stage('Test') {
        //     steps {
        //         script {
        //             // You can include testing steps here if needed
        //             // For example: npm test
        //         }
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         script {
        //             // Push Docker image to registry (if applicable)
        //             // No need to push if using local Docker daemon

        //             // Deploy Docker container
        //             sh 'docker-compose up -d'
        //         }
        //     }
        // }
    }
}
