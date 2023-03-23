pipeline {
    agent any
    environment {
        BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
        TAG = "${env.BUILD_NUMBER}"
        GIT_CREDENTIAL_ID='token-github1'
        TELEGRAM_CHAT_ID = -796162386 
        TELEGRAM_CREDENTIAL_ID="6222583878:AAGXWc836jYOGwLeiHvXIPY4aijeECVskxA"
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
        stage('Notify build') {
            steps {
                echo 'Notify build..'
                
                script {
                    if (BRANCH_NAME == 'development') {
                        BRANCH_NAME = 'Development'
                        def version = env.BUILD_NUMBER
                        Send_Telegram_message(BRANCH_NAME,version)
                    } else if (BRANCH_NAME == 'main') {
                        BRANCH_NAME = 'Production'
                       
                        def version = sh(script: "grep \"version\" package.json | cut -d '\"' -f4 | tr -d '[[:space:]]'", returnStdout: true)
                        Send_Telegram_message(BRANCH_NAME,version)
                    }
                }
                echo 'Building Branch: ' + env.BRANCH_NAME
                echo 'Build Number: ' + TAG
                echo 'Building Environment: ' + BRANCH_NAME
            }
        }
        stage('Build image'){
          
        }
    }
}

void Send_Telegram_message(String env_name,String  version_build){
//------- gửi thông báo đến telegram khi có commit
                        def message = "Buiding ${env_name} ${env.JOB_NAME}: version ${version_build}"
                        def botToken = env.TELEGRAM_CREDENTIAL_ID
                        def chatId = env.TELEGRAM_CHAT_ID
                        sh "curl -X POST -H 'Content-Type: application/json' -d '{\"chat_id\":\"${chatId}\",\"text\":\"${message}\"}' https://api.telegram.org/bot${botToken}/sendMessage"
}
