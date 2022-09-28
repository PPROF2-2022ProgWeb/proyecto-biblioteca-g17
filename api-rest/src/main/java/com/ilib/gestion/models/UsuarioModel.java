package com.ilib.gestion.models;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
public class UsuarioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @OneToMany
    @JoinColumn(name = "id_usuario")
    private List<PrestamoModel> prestamos;

    public List<PrestamoModel> getPrestamos() {
        return prestamos;
    }
    public void setPrestamos(List<PrestamoModel> prestamos) {
        this.prestamos = prestamos;
    }
    private String nombre;
    private String apellido;
    private String domicilio;
    private String telefono;
    private int documento;

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
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public int getDocumento() {
        return documento;
    }
    public void setDocumento(int documento) {
        this.documento = documento;
    }
}
