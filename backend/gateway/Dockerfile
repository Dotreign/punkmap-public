FROM bellsoft/liberica-openjdk-alpine:17

WORKDIR /opt

COPY build/libs/*.jar gateway-service.jar

CMD ["java", "-jar", "gateway-service.jar"]