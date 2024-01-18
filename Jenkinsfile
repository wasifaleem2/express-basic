pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Start Server') {
            steps {
                script {
                    bat 'start npm start'
                }
            }
        }
    }
}
