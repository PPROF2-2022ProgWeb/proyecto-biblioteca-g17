package com.ilib.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ilib.backend.models.PrestamoModel;
import com.ilib.backend.repositories.PrestamoRepository;

@Service
public class PrestamoService {
    @Autowired
    PrestamoRepository prestamoRepository;

    public ArrayList<PrestamoModel> obtenerPrestamos(){
        return (ArrayList<PrestamoModel>)prestamoRepository.findAll();
    }

    public Optional<PrestamoModel> obtenerPrestamoPorId(Long id){
        return prestamoRepository.findById(id);
    }

    public PrestamoModel guardarPrestamo(PrestamoModel prestamo){
        return prestamoRepository.save(prestamo);
    }

    public boolean eliminarPrestamo(Long id){
        try {
            prestamoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
