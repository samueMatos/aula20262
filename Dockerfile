FROM maven:3.9.8-eclipse-temurin-21-jammy
LABEL authors="samuel.matos"

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

WORKDIR /app

COPY --from=builder /app/target/aula20263-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java", "-jar","aula20263-0.0.1-SNAPSHOT.jar"]