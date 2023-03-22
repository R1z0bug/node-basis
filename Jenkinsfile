pipeline {
    agent any
    environment {
        BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
        TAG = "${env.BUILD_NUMBER}"
        TELEGRAM_CHAT_ID = -796162386 
        TELEGRAM_CREDENTIAL_ID='telegram_token_bot'
    }

    // ----------------

    stages {
        stage('Check out') {
            steps {
                echo 'Check out build..'
                
                script {
                    if (BRANCH_NAME == 'development') {
                        Send_Telegram_message(BRANCH_NAME)
                    } else if (BRANCH_NAME == 'main') {
                        Send_Telegram_message(BRANCH_NAME)
                        // echo 'Building Environment: ' + BRANCH_NAME
                    }
                }
                echo 'Building Branch: ' + env.BRANCH_NAME
                echo 'Build Number: ' + TAG
                echo 'Building Environment: ' + BRANCH_NAME

                echo "Building ${BRANCH_NAME} now"
            }
        }
    }
}

void Send_Telegram_message(String env_name){
//------- gửi thông báo đến telegram khi có commit
     withCredentials(([string(credentialsId: 'telegramToken', variable: 'TOKEN'),
      string(credentialsId: 'telegram_token_bot', variable: 'TELEGRAM_CHAT_ID')])) {
      sh 'curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage -d "chat_id=${TELEGRAM_CHAT_ID}"  -d text="[✅] Build ${env_name} 😊"'
      }
   }
 
}