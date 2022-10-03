package com.ilib.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ilib.backend.models.LibroModel;
import com.ilib.backend.repositories.LibroRepository;

@Service
public class LibroService {
    @Autowired
    LibroRepository libroRepository;

    public ArrayList<LibroModel> obtenerLibros(){
        return (ArrayList<LibroModel>)libroRepository.findAll();
    }

    public Optional<LibroModel> obtenerLibroPorId(Long id){
        return libroRepository.findById(id);
    }

    public LibroModel guardarLibro(LibroModel libro){
        return libroRepository.save(libro);
    }

    public ArrayList<LibroModel> obtenerLibroPorTitulo(String titulo){
        return libroRepository.findByTitulo(titulo);
    }

    public boolean eliminarLibro(Long id){
        try {
            libroRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
