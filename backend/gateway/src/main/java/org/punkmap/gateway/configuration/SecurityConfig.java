package org.punkmap.gateway.configuration;

import lombok.RequiredArgsConstructor;
import org.punkmap.gateway.configuration.util.CustomJWTConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.server.resource.authentication.ReactiveJwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.ReactiveJwtGrantedAuthoritiesConverterAdapter;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@RequiredArgsConstructor
@EnableWebFluxSecurity
public class SecurityConfig {

    private final CustomJWTConverter customJWTConverter;

    @Bean
    public SecurityWebFilterChain configureResourceServer(ServerHttpSecurity httpSecurity) {
        return httpSecurity
                .authorizeExchange()
                .pathMatchers(
                        "/actuator/health/**",
                        "/*/*/*/public-message",
                        "/register/**",
                        "/login/**",
                        "/block-info-service/block"
                        ).permitAll()
                .pathMatchers("/*/*/*/student-message").hasAnyRole("USER", "ADMIN")
                .pathMatchers("/*/*/*/admin-message").hasRole("ADMIN")
                .anyExchange().authenticated()
                .and()
                .csrf().disable()
                .httpBasic().disable()
                .formLogin().disable()
                .logout().disable()
                .oauth2ResourceServer().jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
                .and()
                .build();
    }

    @Bean
    public ReactiveJwtAuthenticationConverter jwtAuthenticationConverter() {
        var jwtAuthenticationConverter = new ReactiveJwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new ReactiveJwtGrantedAuthoritiesConverterAdapter(customJWTConverter));
        return jwtAuthenticationConverter;
    }

}
