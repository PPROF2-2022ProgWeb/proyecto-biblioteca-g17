package com.ilib.gestion.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ilib.gestion.models.LibroModel;

@Repository
public interface LibroRepository extends CrudRepository<LibroModel, Long>{
    public abstract ArrayList<LibroModel> findByTitulo(String titulo);
}
