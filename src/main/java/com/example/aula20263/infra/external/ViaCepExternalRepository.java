package com.example.aula20263.infra.external;


import com.example.aula20263.domain.interfaces.IViaCepExternalRepository;
import com.example.aula20263.infra.dto.ViaCepResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Component
public class ViaCepExternalRepository implements IViaCepExternalRepository {

    private  final HttpClient httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10)).build();
    private final ObjectMapper objectMapper = new ObjectMapper();
    @Async
    public ViaCepResponse buscarEnderecoViaCepPorCep(String cep) {
        var url = "https://viacep.com.br/ws/"+cep.replaceAll("[^0-9]","")+"/json/";
        try{
            HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url)).GET().build();
            HttpResponse<String> response = httpClient.send(request,HttpResponse.BodyHandlers.ofString());
            if(response.statusCode() == 200){
                ViaCepResponse  viaCepResponse =  objectMapper.readValue(response.body(),ViaCepResponse.class);
                if(viaCepResponse.getErro()!= null && viaCepResponse.getErro()){
                    throw new RuntimeException("CEP invalido!");
                }
                return viaCepResponse;
            }
            throw new RuntimeException("Erro ao consultar CEP!");

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
