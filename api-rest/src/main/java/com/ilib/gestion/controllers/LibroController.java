package com.ilib.gestion.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ilib.gestion.models.LibroModel;
import com.ilib.gestion.services.LibroService;

@RestController
@RequestMapping("/libro")
public class LibroController {
    @Autowired
    LibroService libroService;

    @GetMapping()
    public ArrayList<LibroModel> obtenerLibros(){
        return libroService.obtenerLibros();
    }

    @PostMapping
    public LibroModel guardarLibro(@RequestBody LibroModel libro){
        return this.libroService.guardarLibro(libro);
    }

    @GetMapping(path = "/{id}")
    public Optional<LibroModel> obtenerUsuarioPorId(@PathVariable("id") Long id){
        return libroService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<LibroModel> obtenerUsuarioPorNombre(@RequestParam("titulo") String titulo){
        return libroService.obtenerPorTitulo(titulo);
    }
}
