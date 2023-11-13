package com.HNCASE.hncasebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.HNCASE.hncasebackend.exception.SalidaEquipoNotFoundException;
import com.HNCASE.hncasebackend.model.SalidaEquipo;
import com.HNCASE.hncasebackend.repository.SalidaEquipoRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SalidaEquipoController {
    @Autowired
    private SalidaEquipoRepository salidaEquipoRepository;

    @PostMapping("/salidaequipo")
    SalidaEquipo nuevaSalidaEquipo(@RequestBody SalidaEquipo nuevaSalidaEquipo) {
        // Establece la fecha actual antes de guardar
        nuevaSalidaEquipo.setFechaSalida(new java.util.Date());

        return salidaEquipoRepository.save(nuevaSalidaEquipo);
    }

    @GetMapping("/salidasequipos")
    List<SalidaEquipo> obtenerTodasLasSalidasEquipos() {
        return salidaEquipoRepository.findAll();
    }

    @GetMapping("/salidaequipo/{salidaId}")
    SalidaEquipo obtenerSalidaEquipoPorId(@PathVariable Long salidaId) {
        return salidaEquipoRepository.findById(salidaId)
                .orElseThrow(() -> new SalidaEquipoNotFoundException(salidaId));
    }

    @PutMapping("/salidaequipo/{salidaId}")
    SalidaEquipo actualizarSalidaEquipo(@RequestBody SalidaEquipo nuevaSalidaEquipo, @PathVariable Long salidaId) {
        return salidaEquipoRepository.findById(salidaId)
                .map(salidaEquipo -> {
                    // Actualiza todos los campos con los valores de nuevaSalidaEquipo
                    salidaEquipo.setRazon(nuevaSalidaEquipo.getRazon());
                    salidaEquipo.setCodequipo(nuevaSalidaEquipo.getCodequipo());
                    salidaEquipo.setEquipo(nuevaSalidaEquipo.getEquipo());
                    salidaEquipo.setArea(nuevaSalidaEquipo.getArea());
                    salidaEquipo.setFechaSalida(nuevaSalidaEquipo.getFechaSalida());
                    return salidaEquipoRepository.save(salidaEquipo);
                }).orElseThrow(() -> new SalidaEquipoNotFoundException(salidaId));
    }

    @DeleteMapping("/salidaequipo/{salidaId}")
    String eliminarSalidaEquipo(@PathVariable Long salidaId) {
        if (!salidaEquipoRepository.existsById(salidaId)) {
            throw new SalidaEquipoNotFoundException(salidaId);
        }
        salidaEquipoRepository.deleteById(salidaId);
        return "Salida de equipo con id " + salidaId + " ha sido eliminada satisfactoriamente.";
    }
}
