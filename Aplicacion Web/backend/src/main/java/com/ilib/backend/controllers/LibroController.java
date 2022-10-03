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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ilib.backend.models.LibroModel;
import com.ilib.backend.services.LibroService;

@RestController
@RequestMapping("/libros")
public class LibroController {
    @Autowired
    LibroService libroService;

    @GetMapping()
    public ArrayList<LibroModel> obtenerLibros(){
        return libroService.obtenerLibros();
    }

    @GetMapping(path = "/{id}")
    public Optional<LibroModel> obtenerLibroPorId(@PathVariable("id") Long id){
        return libroService.obtenerLibroPorId(id);
    }

    @GetMapping("/search")
    public ArrayList<LibroModel> obtenerLibrosPorTitulo(@RequestParam("titulo") String titulo){
        return libroService.obtenerLibroPorTitulo(titulo);
    }

    @PostMapping()
    public LibroModel guardarLibro(@RequestBody LibroModel libro){
        return this.libroService.guardarLibro(libro);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id")Long id){
        boolean ok = this.libroService.eliminarLibro(id);
       if(ok){
            return "Se elimino el libro con id " + id;
       } else {
            return "No se pudo eliminar el libro con id " + id;
       }
    }
}
