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
                    def installDir = "/var/jenkins_home/.local/bin"

                    // Create the directory if it doesn't exist
                    sh "mkdir -p ${installDir}"

                    // Install Docker Compose
                    sh "curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o ${installDir}/docker-compose"
                    sh "chmod +x ${installDir}/docker-compose"

                    // Add the directory to the PATH
                    sh 'echo "PATH=$PATH:' + installDir + '" >> /var/jenkins_home/.bashrc'
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
