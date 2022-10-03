package com.ilib.backend.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ilib.backend.models.LibroModel;

@Repository
public interface LibroRepository extends CrudRepository<LibroModel, Long>{
    public abstract ArrayList<LibroModel> findByTitulo(String titulo);
}
