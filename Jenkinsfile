pipeline {
    environment {
     BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
  }
  agent any

  stages {

        stage('Checkout') {
        steps {
          checkout scm
          echo env.BRANCH_NAME
        }
        }

        stage('Check Version Code') {
                    steps {
                        script {
                            def packageJson = readJSON  file: 'package.json'
                            def versionCode = packageJson.versionCode
                            if (versionCode < 10) {
                                error "Version code must be greater than or equal to 10."
                            }
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