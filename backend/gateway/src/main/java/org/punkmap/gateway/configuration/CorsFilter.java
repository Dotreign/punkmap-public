package org.punkmap.gateway.configuration;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CorsFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        HttpServletResponse servletResponse = (HttpServletResponse) response;
        CustomHeaderRequestWrapper requestWrapper = new CustomHeaderRequestWrapper(servletRequest);
        requestWrapper.addHeader("Custom-Header", "Custom-Value");
        chain.doFilter(requestWrapper, servletResponse);
    }

    @Override
    public void init(jakarta.servlet.FilterConfig filterConfig) throws jakarta.servlet.ServletException {
        jakarta.servlet.Filter.super.init(filterConfig);
    }


    @Override
    public void destroy() {
        jakarta.servlet.Filter.super.destroy();
    }
}
