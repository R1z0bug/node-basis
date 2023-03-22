pipeline {

  agent any

  stages {

        stage('Checkout') {
        steps {
          checkout scm
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