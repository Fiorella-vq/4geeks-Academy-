import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const SelectedMenuData = createContext();

export const CardMenu = ({ menu }) => {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const { listCart, setListCart } = useContext(SelectedMenuData);

    const [showNotification, setShowNotification] = useState(false);

    const handleClick = (menu) => {
        // Crear un ID único basado en el ID y el source
        const uniqueId = `${menu.id}-${menu.source}`;
      
        // Verifica si el artículo ya está en el carrito usando el uniqueId
        const existingItemIndex = listCart.findIndex(item => item.uniqueId === uniqueId);
      
        if (existingItemIndex === -1) {
          // Si el artículo no está en el carrito, lo agregamos con cantidad 1
          setListCart([
            ...listCart,
            { ...menu, quantity: 1, newprice: menu.price, uniqueId } // Agregamos el uniqueId al objeto
          ]);
        } else {
          // Si el artículo ya está en el carrito, actualizamos la cantidad y el precio
          const updatedCart = listCart.map((item) => {
            if (item.uniqueId === uniqueId) {
              return {
                ...item,
                quantity: item.quantity + 1,
                newprice: (item.quantity + 1) * item.price
              };
            }
            return item;
          });
      
          // Actualizamos el carrito con los valores modificados
          setListCart(updatedCart);
        }
      
        console.log("Item seleccionado: ", menu);
      };
      
      
    

    const handleNotificacion = () => {
        if (!showNotification) {
            console.log("Mostrando notificación...");
            setShowNotification(true);
            setTimeout(() => {
              console.log("Ocultando notificación...");
              setShowNotification(false);
            }, 700);
          }
    };

    const navigate = useNavigate();

    // export const CardMenu = ({ menu }) => {
        
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);



    const handleClickStar = (newRating) => {
            setRating(newRating);
        };


    const starElements = [];
        for (let i = 1; i <= 5; i++) {
            const filled = i <= rating;
            starElements.push(
                <span key={i} onClick={() => handleClickStar(i)}>
                    {filled ? (
                        <i className="fas fa-star " style={{ color: "gold" }}></i>
                    ) : (
                        <i className="far fa-star" style={{ color: "gold" }}></i>
                    )}
                </span>
            );
        };

    const toggleModal = () => {
            setShowModal(!showModal);
        };

    return (
        <div key={menu.id} className="col-12 col-md-6 col-lg-3 mb-3">
            <div
                className="card mx-auto"
                style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: "200px",
                    height: "200px",
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div
                    className="card mx-auto"
                    style={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        width: "200px",
                        height: "200px",
                        border: "none",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <div
                        className="position-relative"
                        style={{
                            backgroundColor: "rgb(56, 101, 229)",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        {menu.name}
                    </div>
                    <img
                        src={menu.img}
                        alt={menu.name}
                        className="card-img-top img-fluid"
                        style={{
                            objectFit: "cover",
                            height: "100px",
                            width: "100%",
                        }}
                    />
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "rgb(56, 101, 229)",
                            textAlign: "center",
                            height: "120px",
                        }}
                    >
                        ${menu.price}
                    </div>

                    {/* Renderizado de notificación */}
                    {showNotification && (
                        <div className="notification">
                            ¡Producto añadido al carrito!
                        </div>
                    )}

                    <div className="card-body text-center p-1">
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn btn-sm"
                                onClick={() => {
                                    handleClick(menu);
                                    handleNotificacion();
                                }}
                                style={{
                                    backgroundColor: "rgb(56, 101, 229)",
                                    color: "white",
                                    fontSize: "12px",
                                    borderRadius: "10px",
                                }}
                            >
                                Añadir al Carrito
                            </button>
                            <button
                                className="btn btn-sm"
                                style={{
                                    backgroundColor: "transparent",
                                    fontSize: "20px",
                                }}
                                onClick={toggleModal}
                            >
                                ⭐ <span style={{ fontWeight: "bold", color: "rgb(56, 101, 229)", fontSize: "12px" }}>
                                    {rating} / 5
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className={`modal fade ${showModal ? "show" : ""}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    display: showModal ? "block" : "none",
                }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{
                            fontFamily: "Mulish, sans-serif",
                            backgroundColor: "rgba(56, 101, 229)",
                        }}>
                            <h5 className="modal-title" id="exampleModalLabel" style={{ color: "white" }}>
                                Descripción del Menú
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={toggleModal}
                            ></button>
                        </div>
                        <div className="modal-body d-flex">
                            <img
                                src={menu.img}
                                alt={menu.name}
                                className="img-fluid"
                                style={{
                                    objectFit: "cover",
                                    width: "200px",
                                    height: "auto",
                                    marginRight: "20px",
                                }}
                            />
                            <div>
                                <h5>{menu.name}</h5>
                                <p>Precio: ${menu.price}</p>
                                <p> {menu.description}</p>
                                <div className="d-flex align-items-center" style={{ gap: "10px" }}>
                                    <div>{starElements}</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn"
                                data-bs-dismiss="modal"
                                onClick={toggleModal}
                                style={{ color: "rgb(56, 101, 229)" }}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
