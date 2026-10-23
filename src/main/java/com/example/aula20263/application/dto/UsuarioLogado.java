package com.example.aula20263.application.dto;

import com.example.aula20263.domain.entities.Usuario;
import com.example.aula20263.domain.valueobject.CPF;

public record UsuarioLogado(Long id, String email, CPF cpf,
                            Long empresa_id,
                            java.util.Collection<? extends org.springframework.security.core.GrantedAuthority> authorities) {

    public UsuarioLogado(Usuario usuario){
        this(
                usuario.getId(),
                usuario.getEmail(),
                usuario.getCpf(),
                1L,
                usuario.getAuthorities()
        );
    }
}
