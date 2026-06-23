pipeline {
    agent any

    environment {
        CI = 'true'
        IMAGE_NAME = 'portfolio'
        CONTAINER_NAME = 'portfolio-app'
        HOST_PORT = '3000'
        CONTAINER_PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Docker Run') {
            steps {
                sh '''
                    docker stop ${CONTAINER_NAME} 2>/dev/null || true
                    docker rm ${CONTAINER_NAME} 2>/dev/null || true
                    docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}:latest
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                    sleep 5
                    curl --fail http://localhost:${HOST_PORT}
                '''
            }
        }
    }

    post {
        success {
            echo 'Docker build and deployment completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
