package com.example.aula20263.entities;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    public Long id;

    public String nome;

    public String cpf;

    public String senha;

    public String email;
}
