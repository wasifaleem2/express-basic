pipeline {
    agent any

    stages {
        stage('Init Git') {
            steps {
                script {
                    sh 'git init'
                    sh 'git remote add origin https://github.com/wasifaleem2/express-basic.git'
                    sh 'git fetch origin main'
                    sh 'git checkout main'
                    sh 'git status'
                }
            }
        }
    }
}
