package com.ilib.gestion.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ilib.gestion.models.PrestamoModel;
import com.ilib.gestion.repositories.PrestamoRepository;

@Service
public class PrestamoService {
    @Autowired
    PrestamoRepository prestamoRepository;

    public ArrayList<PrestamoModel> obtenerPrestamos(){
        return (ArrayList<PrestamoModel>) prestamoRepository.findAll();
    }

    public PrestamoModel guardarPrestamo(PrestamoModel prestamo){
        return prestamoRepository.save(prestamo);
    }

    public Optional<PrestamoModel> obtenerPorId(Long id){
        return prestamoRepository.findById(id);
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
