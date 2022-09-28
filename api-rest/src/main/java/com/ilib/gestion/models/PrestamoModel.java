package com.ilib.gestion.models;

import javax.persistence.*;

@Entity
@Table(name="prestamo")
public class PrestamoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    
    private String fechaSalida;
    private String fechaDevolucion;

    @ManyToOne()
    private UsuarioModel usuario;
    @ManyToOne()
    private LibroModel libro;

    public UsuarioModel getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioModel usuario) {
        this.usuario = usuario;
    }
    
    public LibroModel getLibro() {
        return libro;
    }
    public void setIdLibro(LibroModel libro) {
        this.libro = libro;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFechaSalida() {
        return fechaSalida;
    }
    public void setFechaSalida(String fechaSalida) {
        this.fechaSalida = fechaSalida;
    }
    public String getFechaDevolucion() {
        return fechaDevolucion;
    }
    public void setFechaDevolucion(String fechaDevolucion) {
        this.fechaDevolucion = fechaDevolucion;
    }
}
