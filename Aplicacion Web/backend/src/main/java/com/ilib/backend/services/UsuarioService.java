package com.ilib.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ilib.backend.models.UsuarioModel;
import com.ilib.backend.repositories.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public ArrayList<UsuarioModel> obtenerUsuarios(){
        return (ArrayList<UsuarioModel>)usuarioRepository.findAll();
    }

    public Optional<UsuarioModel> obtenerUsuarioPorId(Long id){
        return usuarioRepository.findById(id);
    }

    public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }

    public ArrayList<UsuarioModel> obtenerUsuariosPorNombre(String nombre){
        return usuarioRepository.findByNombre(nombre);
    }

    public boolean eliminarUsuario(Long id){
        try {
            usuarioRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
