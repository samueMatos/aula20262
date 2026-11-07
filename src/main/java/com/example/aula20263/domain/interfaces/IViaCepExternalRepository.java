package com.example.aula20263.domain.interfaces;

import com.example.aula20263.infra.dto.ViaCepResponse;

public interface IViaCepExternalRepository {

        ViaCepResponse buscarEnderecoViaCepPorCep(String cep);


}
