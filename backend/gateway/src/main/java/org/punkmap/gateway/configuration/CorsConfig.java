package org.punkmap.gateway.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@Configuration
public class CorsConfig implements WebFluxConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*"); // Set allowed origins (you can specify a specific domain)
        config.addAllowedMethod("*"); // Set allowed methods
        config.addAllowedHeader("*"); // Set allowed headers
        config.setMaxAge(3600L); // Set max age for pre-flight requests caching

        registry.addMapping("/**")
                .allowedOrigins("*") // Set allowed origins (you can specify a specific domain)
                .allowedMethods("*") // Set allowed methods
                .allowedHeaders("*") // Set allowed headers
                .maxAge(3600L); // Set max age for pre-flight requests caching
    }
}
