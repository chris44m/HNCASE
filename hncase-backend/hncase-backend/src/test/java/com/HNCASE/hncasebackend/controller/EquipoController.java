package com.HNCASE.hncasebackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.HNCASE.hncasebackend.exception.EquipoNotFoundException;
import com.HNCASE.hncasebackend.model.Equipo;
import com.HNCASE.hncasebackend.repository.EquipoRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class EquipoController {
    @Autowired
    private EquipoRepository equipoRepository;

    @PostMapping("/equipo")
    Equipo newEquipo(@RequestBody Equipo newEquipo) {
        return equipoRepository.save(newEquipo);
    }

    @GetMapping("/equipos")
    List<Equipo> getAllEquipos() {
        return equipoRepository.findAll();
    }

    @GetMapping("/equipo/{equipoId}")
    Equipo getEquipoById(@PathVariable Long equipoId) {
        return equipoRepository.findById(equipoId)
                .orElseThrow(() -> new EquipoNotFoundException(equipoId));
    }

    @PutMapping("/equipo/{equipoId}")
    Equipo updateEquipo(@RequestBody Equipo newEquipo, @PathVariable Long equipoId) {
        return equipoRepository.findById(equipoId)
                .map(equipo -> {
                    equipo.setNombre(newEquipo.getNombre());
                    equipo.setDescripcion(newEquipo.getDescripcion());
                    equipo.setEstado(newEquipo.getEstado());
                    return equipoRepository.save(equipo);
                }).orElseThrow(() -> new EquipoNotFoundException(equipoId));
    }

    @DeleteMapping("/equipo/{equipoId}")
    String deleteEquipo(@PathVariable Long equipoId) {
        if (!equipoRepository.existsById(equipoId)) {
            throw new EquipoNotFoundException(equipoId);
        }
        equipoRepository.deleteById(equipoId);
        return "Equipo con id " + equipoId + "ha sido eliminado satisfactoriamente.";
    }

}
