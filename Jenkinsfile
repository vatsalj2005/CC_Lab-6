pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t backend-app backend'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh '''
                docker rm -f backend1 backend2 || true
                docker network create lab-network || true
                docker run -d --name backend1 --network lab-network backend-app
                docker run -d --name backend2 --network lab-network backend-app
                '''
            }
        }

        stage('Deploy NGINX') {
            steps {
                sh '''
                docker rm -f nginx || true
                docker run -d \
                  --name nginx \
                  --network lab-network \
                  -p 8081:80 \
                  -v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf \
                  nginx
                '''
            }
        }

    }
}
