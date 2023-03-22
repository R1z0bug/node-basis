pipeline {
    agent any
    environment {
        ENV_NAME = "${env.BRANCH_NAME}"
    }

    // ----------------

    stages {
        stage('Build Container') {
            steps {
                echo 'Building Container..'

                script {
                    if (ENV_NAME == 'development') {
                      sh "pwd"
                        ENV_NAME = 'Development'
                    } else if (ENV_NAME == 'main') {
                        ENV_NAME = 'Production'
                    }
                }
                echo 'Building Branch: ' + env.BRANCH_NAME
                echo 'Build Number: ' + env.BUILD_NUMBER
                echo 'Building Environment: ' + ENV_NAME

                echo "Running your service with environemnt ${ENV_NAME} now"
            }
        }
    }
}