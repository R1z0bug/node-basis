pipeline {
    agent any
    environment {
        BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
        TAG = "${env.BUILD_NUMBER}"
        GIT_CREDENTIAL_ID='token-github'
        TELEGRAM_CHAT_ID = -796162386 
        TELEGRAM_CREDENTIAL_ID="6222583878:AAGXWc836jYOGwLeiHvXIPY4aijeECVskxA"
        GIT_REGISTRY = 'registry.bkav.com/minhthc/test-jenkins'
    }

    // ----------------

    stages {
        stage('Git Clone') {
            steps {
              // echo $(env.GIT_BRANCH)
              // echo env.GIT_URL
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                        git branch: "${BRANCH_NAME}", credentialsId: "${GIT_CREDENTIAL_ID}", url: "${env.GIT_URL}"
                }
            }
        }
        stage('Build and push') {
            steps {
                echo 'Notify build..'
                
                script {
                    if (BRANCH_NAME == 'development') {
                        // env.BRANCH_NAME = 'Development'
                        def version = env.BUILD_NUMBER
                    } else if (BRANCH_NAME == 'main') {
                        // env.BRANCH_NAME = 'Production'
                        def version = sh(script: "grep \"version\" package.json | cut -d '\"' -f4 | tr -d '[[:space:]]'", returnStdout: true)
                    }
                }
                  withDockerRegistry(credentialsId: 'registry.bkav.com', url: 'https://registry.bkav.com/') {
                      // some block
                  def dockerTag = "TEST/BTI:${version}"
                   sh "docker build -t $dockerTag ."
                          }
                echo 'Building Branch: ' + env.BRANCH_NAME
                echo 'Build Number: ' + TAG
                echo 'Building Environment: ' + BRANCH_NAME
            }

        }
    }
    post{
          always{

            script {
            //------- gửi thông báo đến telegram khi có commit
            echo 'One way or another, I have finished'
            def message = "Branch ${env.BRANCH_NAME} Build complete: ${currentBuild.fullDisplayName} finished with status ${currentBuild.currentResult}"
            def botToken = env.TELEGRAM_CREDENTIAL_ID
            def chatId = env.TELEGRAM_CHAT_ID
            sh "curl -X POST -H 'Content-Type: application/json' -d '{\"chat_id\":\"${chatId}\",\"text\":\"${message}\"}' https://api.telegram.org/bot${botToken}/sendMessage"
          }
          }
        }
    
}

