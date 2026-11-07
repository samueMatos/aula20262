package com.example.aula20263.domain.repository;

import com.example.aula20263.domain.entities.Curso;
import com.example.aula20263.domain.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CursoRepository extends JpaRepository<Curso,Long> {
    List<Curso> getCursosByEmpresa_Id(Long empresa);

}
