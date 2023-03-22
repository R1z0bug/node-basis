pipeline {
    environment {
     BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
    DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
  }
  agent any

  stages {
            stage('Checkout') {
        steps {
          checkout scm
          echo env.BRANCH_NAME
          echo env.GIT_URL
        }
        }
                stage('Git Clone'){
            steps{
                script {
                    git branch: "${BRANCH_NAME}", credentialsId: "${GIT_CREDENTIAL_ID}", url: "${env.GIT_URL}"
                }}
                }
            

        stage('Check Version Code') {
                    steps {
                        script {
                          PACKAGE_VERSION = sh returnStdout: true, script: '''grep 'version' package.json | cut -d '"' -f4 | tr '\n' '\0''''
                          echo $PACKAGE_VERSION
                        }
                    }
        }
  }

  post {
    success {
      echo "SUCCESSFUL"
    }
    failure {
      echo "FAILED"
    }
  }
}