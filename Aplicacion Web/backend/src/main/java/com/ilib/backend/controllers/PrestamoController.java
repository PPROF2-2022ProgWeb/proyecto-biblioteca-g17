package com.ilib.backend.controllers;

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

import com.ilib.backend.models.PrestamoModel;
import com.ilib.backend.services.PrestamoService;

@RestController
@RequestMapping("/prestamos")
public class PrestamoController {
    @Autowired
    PrestamoService prestamoService;

    @GetMapping()
    public ArrayList<PrestamoModel> obtenerPrestamos(){
        return prestamoService.obtenerPrestamos();
    }

    @GetMapping("/{id}")
    public Optional<PrestamoModel> obtenerPrestamoPorId(@PathVariable("id") Long id){
        return this.prestamoService.obtenerPrestamoPorId(id);
    }

    @PostMapping()
    public PrestamoModel guardarPrestamo(@RequestBody PrestamoModel prestamo){
        return this.prestamoService.guardarPrestamo(prestamo);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.prestamoService.eliminarPrestamo(id);
        if(ok){
            return "Se elimino el prestamo con el id " + id;
        } else {
            return "No se pudo eliminar el prestamo con el id " + id;
        }
    }
}
