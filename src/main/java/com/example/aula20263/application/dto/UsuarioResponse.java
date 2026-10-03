package com.example.aula20263.application.dto;

import com.example.aula20263.domain.entities.EnumStatusUsuario;
import com.example.aula20263.domain.entities.Usuario;

public record UsuarioResponse(Long id, String nome, String cpf, String email, EnumStatusUsuario status) {

    public UsuarioResponse(Usuario usuarioEntidade){

        this(
                usuarioEntidade.getId(),
                usuarioEntidade.getNome(),
                usuarioEntidade.getCpf(),
                usuarioEntidade.getEmail(),
                usuarioEntidade.getStatus()
        );
    }
}
