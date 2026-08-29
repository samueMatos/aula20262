package com.example.aula20263.repository;

import com.example.aula20263.entities.EnumStatusUsuario;
import com.example.aula20263.entities.Usuario;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    boolean existsUsuarioByEmailAndSenha(String email, String senha);

     Optional<List<Usuario>> findByStatusNot(EnumStatusUsuario status);
}
