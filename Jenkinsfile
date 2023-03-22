pipeline {
    agent any
    environment {
        BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
        TAG = "${env.BUILD_NUMBER}"
        TELEGRAM_CHAT_ID = -796162386 
        TELEGRAM_CREDENTIAL_ID="6222583878:AAGXWc836jYOGwLeiHvXIPY4aijeECVskxA"
    }

    // ----------------

    stages {
        stage('Check out') {
            steps {
                echo 'Check out build..'
                
                script {
                    if (BRANCH_NAME == 'development') {
                        BRANCH_NAME = 'Development'
                        Send_Telegram_message(BRANCH_NAME)
                    } else if (BRANCH_NAME == 'main') {
                        BRANCH_NAME = 'Production'
                        Send_Telegram_message(BRANCH_NAME)
                        sh "pwd && ls"
                        echo 'Building Environment: ' + BRANCH_NAME
                    }
                }
                echo 'Building Branch: ' + env.BRANCH_NAME
                echo 'Build Number: ' + TAG
                echo 'Building Environment: ' + BRANCH_NAME

                echo "Running your service with environemnt ${BRANCH_NAME} now"
            }
        }
    }
}

void Send_Telegram_message(String env_name){
//------- gửi thông báo đến telegram khi có commit
                        def message = "${env_name} ${env.JOB_NAME} ${env.BUILD_NUMBER}"
                        def botToken = env.TELEGRAM_CREDENTIAL_ID
                        def chatId = env.TELEGRAM_CHAT_ID
                        sh "curl -X POST -H 'Content-Type: application/json' -d '{\"chat_id\":\"${chatId}\",\"text\":\"${message}\"}' https://api.telegram.org/bot${botToken}/sendMessage"

   }