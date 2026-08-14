package com.example.aula20263.controllers;

import com.example.aula20263.entities.Usuario;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final ResourceLoader resourceLoader;

    public UsuarioController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @GetMapping
    public ResponseEntity<?> listarTodos(){

        List<Usuario> usuarios =
                List.of(new Usuario(1L,
                        "Samuel",
                        "06372005948",
                        "123456",
                        "samuel.matos@prof.sc.senac.br"));


        return  ResponseEntity.ok(usuarios);
    }


}
