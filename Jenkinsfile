pipeline {
    agent any
    environment {
        ENV_NAME = "${env.BRANCH_NAME}"
        TELEGRAM_CHAT_ID = -796162386 
        TELEGRAM_CREDENTIAL_ID='telegram_token_bot'
    }

    // ----------------

    stages {
        stage('Build Container') {
            steps {
                echo 'Building Container..'

                script {
                    if (ENV_NAME == 'development') {
                        ENV_NAME = 'Development'
                        Send_Telegram_message(ENV_NAME)
                    } else if (ENV_NAME == 'main') {
                        ENV_NAME = 'Production'
                        Send_Telegram_message(ENV_NAME)
                    }
                }
                echo 'Building Branch: ' + env.ENV_NAME
                echo 'Build Number: ' + env.BUILD_NUMBER
                echo 'Building Environment: ' + ${ENV_NAME}

                echo "Running your service with environemnt ${ENV_NAME} now"
            }
        }
    }
}

void Send_Telegram_message(String env_name){
//------- gửi thông báo đến telegram khi có commit
    def message = "Pipeline failed: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
                        def botToken = env.TELEGRAM_CREDENTIAL_ID
                        def chatId = env.TELEGRAM_CHAT_ID
                        sh "curl -X POST -H 'Content-Type: application/json' -d '{\"chat_id\":\"${chatId}\",\"Build ${env_name}\":\"${message}\"}' https://api.telegram.org/bot${botToken}/sendMessage"
}