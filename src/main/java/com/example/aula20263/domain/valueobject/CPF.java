package com.example.aula20263.domain.valueobject;

public class CPF {

    private String cpf;

    public CPF(){
        this.cpf = "";
    }

    public CPF(String cpf){

        if(!isValidCpf(cpf)){
            throw new IllegalArgumentException("CPF Invalido!");
        }

        this.cpf = cpf;
    }



    public static boolean isValidCpf(String cpf) {
        if (cpf == null) {
            return false;
        }

        // Remove tudo o que não for dígito
        cpf = cpf.replaceAll("\\D", "");

        // Verifica se tem 11 dígitos
        if (cpf.length() != 11) {
            return false;
        }

        // Descarta CPFs com todos os dígitos iguais (ex: 000.000.000-00)
        if (cpf.matches("(\\d)\\1{10}")) {
            return false;
        }

        try {
            // Cálculo do 1º dígito verificador
            int soma = 0;
            for (int i = 0; i < 9; i++) {
                soma += Character.getNumericValue(cpf.charAt(i)) * (10 - i);
            }
            int digito1 = 11 - (soma % 11);
            if (digito1 > 9) {
                digito1 = 0;
            }

            if (digito1 != Character.getNumericValue(cpf.charAt(9))) {
                return false;
            }

            // Cálculo do 2º dígito verificador
            soma = 0;
            for (int i = 0; i < 10; i++) {
                soma += Character.getNumericValue(cpf.charAt(i)) * (11 - i);
            }
            int digito2 = 11 - (soma % 11);
            if (digito2 > 9) {
                digito2 = 0;
            }

            return digito2 == Character.getNumericValue(cpf.charAt(10));

        } catch (NumberFormatException e) {
            return false;
        }
    }




    @Override
    public String toString(){
        return cpf.replaceAll("\\D","")
                .replaceAll("(\\d{3})(\\d{3})(\\d{3})(\\d{2})","$1.$2.$3-$4");
    }

}
