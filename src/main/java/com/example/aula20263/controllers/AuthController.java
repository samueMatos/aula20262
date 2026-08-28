package com.example.aula20263.controllers;


import com.example.aula20263.dto.LoginRequestDto;
import com.example.aula20263.services.TokenService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@Tag(name = "Autenticação controller",description = "Controller responsavel pela autencicação da aplicação!")
public class AuthController {

    @Autowired
    private TokenService tokenService;


    @PostMapping("/login")
    @Operation(summary = "Login", description = "Método responsavel por efetuar o login do usuário!")
    public ResponseEntity<?> login(@RequestBody LoginRequestDto resquest) {

        if (resquest.email().equals("string") && resquest.senha().equals("string")) {

            var token = tokenService.gerarToken(resquest);

            return ResponseEntity.ok(token);
        }

        return ResponseEntity.badRequest().body("Usuário ou senha Invalido!");

    }
}
