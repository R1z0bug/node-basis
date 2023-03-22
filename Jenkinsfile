pipeline {

  agent none
  environment {
     BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
    DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
  }
  stages {
        stage("Test") {
    agent {
          docker {
            image 'node:19-slim-buster'
            args '-u 0:0 -v /tmp:/root/.cache'
          }
    }
        }
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
           agent { node {label 'master'}}
                    steps {
                        script {
                          def PACKAGE_VERSION = sh "VERSION=${version}_${BUILD_NUMBER}_${BRANCH_NAME} npm run build"
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