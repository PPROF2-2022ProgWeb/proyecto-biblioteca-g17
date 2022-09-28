package com.ilib.gestion.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ilib.gestion.models.PrestamoModel;

@Repository
public interface PrestamoRepository extends CrudRepository<PrestamoModel, Long>{
    
}
