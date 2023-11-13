package com.HNCASE.hncasebackend.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class EquipoNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(EquipoNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> ExceptionHandler(EquipoNotFoundException exception) {

        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("Mensaje de Error", exception.getMessage());
        return errorMap;
    }

}
