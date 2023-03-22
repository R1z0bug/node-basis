pipeline {

  agent any
  environment {
    BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
    DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
    GIT_CREDENTIAL_ID='token-github1'
  }
  stages {
        // stage('check out') {
        //   steps{
        //     checkout scm
        //   }
        // }
        stage('Git Clone') {
            steps {
              echo env.GIT_BRANCH
              echo env.GIT_URL
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                        git branch: "${GIT_BRANCH}", credentialsId: "${GIT_CREDENTIAL_ID}", url: "${GIT_URL}"
                }
            }
        }
        stage('Check Version Code') {
                    steps {
                        script {
                              def PACKAGE_VERSION = sh(script: "grep \"version\" package.json | cut -d '\"' -f4 | tr -d '[[:space:]]'", returnStdout: true)
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