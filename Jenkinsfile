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
                    sh 'npm install'
                }
            }
        }

        stage('Start Server') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm start &'
                    } else {
                        bat 'start npm start'
                    }
                }
            }
        }
    }
}
