package com.ilib.gestion.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ilib.gestion.models.PrestamoModel;
import com.ilib.gestion.services.PrestamoService;

@RestController
@RequestMapping("/prestamo")
public class PrestamoController {
    @Autowired
    PrestamoService prestamoService;

    @GetMapping()
    public ArrayList<PrestamoModel> obtenerPrestamos(){
        return prestamoService.obtenerPrestamos();
    }

    @PostMapping
    public PrestamoModel guardarPrestamo(@RequestBody PrestamoModel prestamo){
        return this.prestamoService.guardarPrestamo(prestamo);
    }

    @GetMapping(path = "/{id}")
    public Optional<PrestamoModel> obtenerPrestamoPorId(@PathVariable("id") Long id){
        return prestamoService.obtenerPorId(id);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.prestamoService.eliminarPrestamo(id);
        if(ok){
            return "Se eliminó el prestamo con id " + id;
        } else {
            return "No se pudo eliminar el prestamo con id " + id;
        }
    }
}
