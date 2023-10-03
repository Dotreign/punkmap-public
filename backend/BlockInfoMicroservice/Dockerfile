FROM bellsoft/liberica-openjdk-alpine:17

WORKDIR /opt

COPY build/libs/*.jar block-info-service.jar

CMD ["java", "-jar", "block-info-service.jar"]