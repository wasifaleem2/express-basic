pipeline {
    agent any

    triggers {
        cron('*/2 * * * *')
    }

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
                    bat 'npm start &'
                }
            }
        }
    }
}
