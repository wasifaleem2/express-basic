pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('Build and Test') {
        //     steps {
        //         script {
        //             // install inside Node.js container
        //             // docker.image('node:14').inside {
        //             sh 'npm install'
        //             // }
        //         }
        //     }
        // }

        stage('Install Docker Compose') {
            steps {
                script {
                    // Install Docker Compose
                    sh 'apt-get update -y && apt-get install -y docker-compose && rm -rf /var/lib/apt/lists/*'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image inside Node.js container
                    sh 'docker-compose -f docker-compose.yaml build node-app-jenkins'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Use docker-compose to manage deployment
                    sh 'docker-compose -f docker-compose.yaml stop node-app-jenkins || true'
                    sh 'docker-compose -f docker-compose.yaml stop node-app-jenkins -y || true'
                    // run the new container
                    sh 'docker-compose -f docker-compose.yaml up -d'
                }
            }
        }
    }
}
