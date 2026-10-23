package com.example.aula20263.application.services;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.aula20263.application.dto.LoginRequest;
import com.example.aula20263.application.dto.UsuarioLogado;
import com.example.aula20263.domain.entities.Token;
import com.example.aula20263.domain.entities.Usuario;
import com.example.aula20263.domain.repository.TokenRepository;
import com.example.aula20263.domain.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${spring.secretkey}")
    private String secret;

    @Value("${spring.tempo_expiracao}")
    private Long tempo;

    private String emissor = "DEVTEST";

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private TokenRepository tokenRepository;


    public String gerarToken(LoginRequest loginResquestDto){

        Algorithm algorithm = Algorithm.HMAC256(secret);

        var usuario = usuarioRepository.findAll()
                .stream().filter( u-> u.getEmail().equals(loginResquestDto.email()))
                .findFirst().orElse(null);

        String token = JWT.create()
                .withIssuer(emissor)
                .withSubject(loginResquestDto.email())
                .withExpiresAt(this.gerarDataExpiracao())
                .sign(algorithm);


        tokenRepository.save(new Token(token,usuario));

        return token;
    }

    public UsuarioLogado verificarToken(String token) throws JWTVerificationException {
        Algorithm algorithm = Algorithm.HMAC256(secret);

        JWTVerifier verificador = JWT.require(algorithm).withIssuer(emissor).build();

         verificador.verify(token);

         var tokenBanco = tokenRepository.findTokenByToken(token).orElse(null);

         if(tokenBanco==null){
             throw  new IllegalArgumentException("Token Invalido!");
         }

         return new UsuarioLogado(tokenBanco.getUsuario());

    }

    private Instant gerarDataExpiracao(){
        var dataAtual = LocalDateTime.now();
        dataAtual = dataAtual.plusMinutes(tempo);

        return dataAtual.toInstant(ZoneOffset.of("-03:00"));

    }

}
