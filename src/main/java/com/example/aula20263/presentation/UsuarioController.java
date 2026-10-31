package com.example.aula20263.presentation;

import com.example.aula20263.application.dto.*;
import com.example.aula20263.application.services.UsuarioService;
import com.example.aula20263.application.dto.EnumStatusUsuario;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {


    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<UsuarioResponse>> listarTodos(){

        return  ResponseEntity.ok(usuarioService.listarTodosUsuariosTable());
    }

    @PostMapping("/admin")
    public ResponseEntity<CriarAdminResponse> criarAdmin(@RequestBody CriarAdminRequest criarAdminRequest){

        try{
            CriarAdminResponse respostaSalvar = usuarioService.criarAdmin(criarAdminRequest);
            return ResponseEntity.ok(respostaSalvar);

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioResponse> buscarPorId(@PathVariable Long id){

        UsuarioResponse usuarioBanco = usuarioService.buscarPorId(id);
        if(usuarioBanco!= null ){
            return  ResponseEntity.ok(usuarioBanco);
        }

        return  ResponseEntity.notFound().build();
    }



    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> criar(@RequestBody UsuarioRequest usuario){

        try {
            UsuarioResponse usuarioBanco = usuarioService.salvarUsuario(usuario,0L);
            return ResponseEntity.ok(usuarioBanco);
        }catch (Exception e){
             return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Void> atualizarStatus(@PathVariable Long id, @RequestBody AtualizarStatusRequest statusRequest){

        var atualizarUsuario = usuarioService.atualizarStatus(statusRequest.status(),id);

        if(atualizarUsuario){
            return ResponseEntity.ok().build();
        }

        return  ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizar(@PathVariable Long id, @RequestBody UsuarioRequest usuario){

        try {
            UsuarioResponse usuarioBanco = usuarioService.salvarUsuario(usuario,id);
            return ResponseEntity.ok(usuarioBanco);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @DeleteMapping("/{id}/excluir")
    public ResponseEntity<Void> excluir(@PathVariable Long id){

        var atualizarUsuario = usuarioService.atualizarStatus(EnumStatusUsuario.EXCLUIDO,id);

        if(atualizarUsuario){
            return ResponseEntity.ok().build();
        }

        return  ResponseEntity.notFound().build();

    }


    @PatchMapping("/{id}/matricular")
    public  ResponseEntity<?> matricular(@PathVariable Long id, @RequestBody MatriculaRequest matriculaRequest){

        boolean retornoMatricula = usuarioService.matricularAluno(id,matriculaRequest);

        if(retornoMatricula){
            return ResponseEntity.ok().build();
        }

        return  ResponseEntity.notFound().build();
    }

    @GetMapping("/buscarusuariologado")
    @Operation(summary = "Usuario Logado",description = "Usuario logado")
    public ResponseEntity<UsuarioResponse> buscarUsuarioLogado(){
        return ResponseEntity.ok(usuarioService.BuscarUsuarioLogado());
    }



}
