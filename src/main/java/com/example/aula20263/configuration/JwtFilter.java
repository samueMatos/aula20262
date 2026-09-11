package com.example.aula20263.configuration;


import com.example.aula20263.services.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        String uri  = request.getRequestURI();

        if(uri.startsWith("/swagger-ui")
        || uri.startsWith("/v2/api-docs")
        || uri.startsWith("/v3/api-docs")
        || uri.startsWith("/swagger-resources")
        || uri.startsWith("webjars")
        || uri.startsWith("/auth/login")
        || uri.startsWith("/")
        ){
            filterChain.doFilter(request,response);
            return;
        }



        String authHeader = request.getHeader("Authorization");

        if(authHeader!= null && authHeader.startsWith("Bearer ")){
            String token = authHeader.replace("Bearer ","");

            try{

                var jwtValidador = tokenService.verificarToken(token);

                System.out.println(jwtValidador.getSubject());

            } catch (Exception e) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().println("Token invalido");
                return;


            }

        }else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().println("Token invalido");
            return;
        }


        filterChain.doFilter(request,response);

    }
}
