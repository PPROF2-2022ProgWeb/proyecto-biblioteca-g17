package com.ilib.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")
public class UsuarioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    
    private String nombre;
    private String apellido;
    private String domicilio;
    private Integer documento;
    private Integer telefono;
    private Integer sanciones;
    private Integer sancionesDinero;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getDomicilio() {
        return domicilio;
    }
    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }
    public Integer getDocumento() {
        return documento;
    }
    public void setDocumento(Integer documento) {
        this.documento = documento;
    }
    public Integer getTelefono() {
        return telefono;
    }
    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }
    public Integer getSanciones() {
        return sanciones;
    }
    public void setSanciones(Integer sanciones) {
        this.sanciones = sanciones;
    }
    public Integer getSancionesDinero() {
        return sancionesDinero;
    }
    public void setSancionesDinero(Integer sancionesDinero) {
        this.sancionesDinero = sancionesDinero;
    }
}
