package com.example.aula20263.infra.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ViaCepResponse {

    private String cep;
    private String  logradouro;
    private String  bairro;
    private String  localidade;
    private String  uf;
    private String  estado;
    private Boolean erro;

}
