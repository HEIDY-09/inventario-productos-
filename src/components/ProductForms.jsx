import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductForm = () => {
  const { editingProduct, setEditingProduct, updateProduct, addProduct } = useContext(ProductContext);
  
  const [form, setForm] = useState({ nombre: '', cantidad: '', precio: '' });

  // Cada vez que 'editingProduct' cambie, rellenamos el formulario si existe
  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Función del contexto para actualizar
      updateProduct(form);
    } else {
      // Función del contexto para agregar nuevo
      addProduct({ ...form, id: Date.now() });
    }
    // Limpiar formulario y cerrar modo edición
    setForm({ nombre: '', cantidad: '', precio: '' });
    setEditingProduct(null);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? 'Editar Producto' : 'Agregar Producto'}</h2>
      
      <input 
        type="text" 
        name="nombre" 
        placeholder="Nombre" 
        value={form.nombre} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="cantidad" 
        placeholder="Cantidad" 
        value={form.cantidad} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="precio" 
        placeholder="Precio" 
        value={form.precio} 
        onChange={handleChange} 
        required 
      />
      
      <button type="submit" className="btn-submit">
        {editingProduct ? 'Actualizar Cambios' : 'Guardar Producto'}
      </button>

      {editingProduct && (
        <button 
          type="button" 
          className="btn-cancel" 
          onClick={() => { setEditingProduct(null); setForm({ nombre: '', cantidad: '', precio: '' }); }}
        >
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ProductForm;