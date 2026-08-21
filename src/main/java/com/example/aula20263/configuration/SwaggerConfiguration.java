package com.example.aula20263.configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {


    @Bean
    public OpenAPI customOpemAPI(){

        return new OpenAPI()
                .info(new Info()
                        .title("Alula20262")
                        .version("1.0.0")
                        .description("Api para aula da 4 fase!")
                );

    }
}
