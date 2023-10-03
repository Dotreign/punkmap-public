FROM bellsoft/liberica-openjdk-alpine:17

WORKDIR /opt

COPY build/libs/*.jar eureka-service.jar

CMD ["java", "-jar", "eureka-service.jar"]