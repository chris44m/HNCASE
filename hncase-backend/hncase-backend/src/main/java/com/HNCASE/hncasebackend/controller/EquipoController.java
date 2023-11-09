package com.HNCASE.hncasebackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.HNCASE.hncasebackend.model.Equipo;
import com.HNCASE.hncasebackend.repository.EquipoRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
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

}
