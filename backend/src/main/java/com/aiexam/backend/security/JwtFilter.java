package com.aiexam.backend.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        String token = null;
        String email = null;

        if (authHeader != null &&
                authHeader.startsWith("Bearer ")) {

            token = authHeader.substring(7);

            try {
                email = jwtUtil.extractEmail(token);

                System.out.println("===== JWT FILTER =====");
                System.out.println("Authorization Header: " + authHeader);
                System.out.println("Email Extracted: " + email);
            } catch (Exception e) {
                System.out.println("Invalid Token");
            }
        }

        if (email != null &&
                SecurityContextHolder.getContext()
                        .getAuthentication() == null) {

            UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(
                            User.withUsername(email)
                                    .password("")
                                    .authorities("USER")
                                    .build(),
                            null,
                            User.withUsername(email)
                                    .password("")
                                    .authorities("USER")
                                    .build()
                                    .getAuthorities());

            authToken.setDetails(
                    new WebAuthenticationDetailsSource()
                            .buildDetails(request));

            SecurityContextHolder.getContext()
                    .setAuthentication(authToken);
        }
        System.out.println("Authentication Set Successfully");

        filterChain.doFilter(request, response);
    }
}