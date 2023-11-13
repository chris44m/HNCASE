package com.HNCASE.hncasebackend.exception;

public class EquipoNotFoundException extends RuntimeException {

    public EquipoNotFoundException(Long id) {

        super("No se encontro el equipo con el id: " + id);
    }

}
