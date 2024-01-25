pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/wasifaleem2/express-basic.git']]])
                }
            }
        }

        // Add other stages as needed
    }
}
