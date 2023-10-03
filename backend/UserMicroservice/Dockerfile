FROM bellsoft/liberica-openjdk-alpine:17

WORKDIR /opt

COPY build/libs/*.jar user-info-service.jar

CMD ["java", "-jar", "user-info-service.jar"]