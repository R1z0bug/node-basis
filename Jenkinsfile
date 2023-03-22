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
          echo env.GIT_URL
        }
        }
        stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
        stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        sh 'npm run deploy'
      }
        stage('Check Version ') {
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