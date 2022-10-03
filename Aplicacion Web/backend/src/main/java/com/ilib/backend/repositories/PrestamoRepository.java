package com.ilib.backend.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ilib.backend.models.PrestamoModel;


@Repository
public interface PrestamoRepository extends CrudRepository<PrestamoModel, Long>{
    
}
