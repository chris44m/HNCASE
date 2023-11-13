package com.HNCASE.hncasebackend.exception;

public class SalidaEquipoNotFoundException extends RuntimeException {

    public SalidaEquipoNotFoundException(Long id) {

        super("No se encontro el equipo con el id: " + id);
    }

}
