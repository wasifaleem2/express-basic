pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image
                    sh 'npm install'
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

        stage('Deploy') {
            steps {
                script {
                    sh 'npm start'
                }
            }
        }
    }
}
