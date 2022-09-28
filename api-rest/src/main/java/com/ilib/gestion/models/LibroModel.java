package com.ilib.gestion.models;

import java.util.List;

import javax.persistence.*;


@Entity
@Table(name = "libro")
public class LibroModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @OneToMany
    @JoinColumn(name = "id_libro")
    private List<PrestamoModel> prestamos;

    public List<PrestamoModel> getPrestamos() {
        return prestamos;
    }
    public void setPrestamos(List<PrestamoModel> prestamos) {
        this.prestamos = prestamos;
    }
    private String titulo;
    private String autor;
    private String categoria;
    private String edicion;
    private String idioma;
    private int publicacion;
    private int paginas;
    private int stock;
    private int disponibles;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    public String getEdicion() {
        return edicion;
    }
    public void setEdicion(String edicion) {
        this.edicion = edicion;
    }
    public String getIdioma() {
        return idioma;
    }
    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }
    public int getPublicacion() {
        return publicacion;
    }
    public void setPublicacion(int publicacion) {
        this.publicacion = publicacion;
    }
    public int getPaginas() {
        return paginas;
    }
    public void setPaginas(int paginas) {
        this.paginas = paginas;
    }
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
    public int getDisponibles() {
        return disponibles;
    }
    public void setDisponibles(int disponibles) {
        this.disponibles = disponibles;
    }
}
