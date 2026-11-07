package com.example.aula20263.application.services;

import com.example.aula20263.domain.entities.Curso;
import com.example.aula20263.domain.repository.CursoRepository;
import com.example.aula20263.domain.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private EmpresaRepository empresaRepository;

    // Deveria ser um retorno de CursoResponse
    public List<Curso> consultarCurso(Long id){

        var usuarioLogado = usuarioService.getUsuarioLogado();

        if(usuarioLogado.empresa_id()!= null){

          return   cursoRepository.getCursosByEmpresa_Id(usuarioLogado.empresa_id());
        }

        return cursoRepository.findAll();

    }

    public Curso salvarNovo(Curso curso){

        var usuarioLogado = usuarioService.getUsuarioLogado();

        //Consultar empresa somente se ter um usuario logado com empresa id ADMIN nao tem empresa
        var empresaLogada = empresaRepository.findById(usuarioLogado.empresa_id()).orElse(null);

        curso.setEmpresa(empresaLogada);

        return  cursoRepository.save(curso);
    }



}
