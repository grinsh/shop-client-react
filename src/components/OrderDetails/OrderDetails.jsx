import { useEffect, useState } from "react";
import "./OrderDetails.css"

export default function OrderDetails() {

    const [order, setOrder] = useState(null);
    const [status, setStatus] = useState("show");   //"show","edit","add"

    useEffect(() => {
        const dataFromServer = {
            id: 123,
            ordDate: new Date(),
            arrivalDate: new Date(),
            address: "לוי 5 בני ברק",
            phone: "0504121234",
            email: "safaj@gmail.com",
            complete: false,
            userId: 1,
            products: []  //לכאן יוכנס מערך של מוצר

        }
        setOrder(dataFromServer);
        setStatus("show");
    }, [])




    const deleteOrder = () => {
        const toDelete = prompt("האם אתה בטוח שאתה רוצה למחוק? (כן/לא)");
        if (toDelete == "כן")
            alert(`הזמנה מספר ${order.id} בוטלה`);
        else
            alert("אנחנו שמחים לתת שירות מכל הלב!");

        //שליחה למחיקה בשרת
    }

    return (
        <>


            <div className="col-4 m-auto mt-5">
                <div className="card-body">
                    <div className="container w-100 m-auto ">
                        <div className="row justify-content-center mb-4 ">
                            <button onClick={() => { setStatus("edit") }} className="btn btn-primary col-2" style={{ backgroundColor: "#dadada" }}><i className="bi bi-pencil-fill"></i>  </button>
                            <button onClick={() => { setStatus("add") }} className="btn btn-primary col-2" style={{ backgroundColor: "#dadada" }}><i className="bi bi-plus-lg"></i></button>
                            <button onClick={deleteOrder} className="btn btn-primary col-2" style={{ backgroundColor: "#dadada" }}><i className="bi bi-trash-fill"></i></button>
                        </div>
                    </div>
                </div>

                {status == "show" && order ?
                    // <div className="card">
                    //     <p>הזמנה מספר {order.id}</p>
                    //     <p>תאריך אספקה {order.arrivalDate.toDateString()} </p>
                    //     <p>כתובת {order.address}</p>
                    //     <p>טלפון ליצירת קשר {order.phone}</p>
                    //     {order.complete == true ? <p>ההזמנה בוצעה בהצלחה!</p> : <p>ביכולתך לבחור מוצרים נוספים או לסגור הזמנה</p>}
                    //     {order.complete == false && <button>סגור הזמנה</button>}
                    // </div>
                    <div className="card w-100" style={{ width: "18rem" }}>

                        <div className="card-body">
                            <h5 className="card-title">הזמנה מספר {order.id}</h5>
                            <p className="card-text">תאריך אספקה {order.arrivalDate.toDateString()}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">כתובת {order.address}</li>
                            <li className="list-group-item">טלפון ליצירת קשר {order.phone}</li>
                            <li className="list-group-item"> {order.complete == true ? <p>ההזמנה בוצעה בהצלחה!</p> : <p>ביכולתך לבחור מוצרים נוספים או לסגור הזמנה</p>}</li>
                        </ul>
                        <div className="card-body">
                            {order.complete == false && <button href="#" className="btn btn-primary" style={{ backgroundColor: "pink" }}>סגור הזמנה</button>}
                        </div>
                    </div>
                    : order ?

                        <form className="card">
                            {status == "add" ? <h1>הוספת הזמנה</h1> : <h1>עריכת הזמנה</h1>}
                            <input type="text" value={order.id} onChange={e => setOrder({ ...order, id: e.target.value })} />
                            <input type="text" value={order.arrivalDate.toDateString()} onChange={e => setOrder({ ...order, arrivalDate: e.target.value })} />
                            <input type="text" value={order.address} onChange={e => setOrder({ ...order, address: e.target.value })} />
                            <input type="text" value={order.phone} onChange={e => setOrder({ ...order, phone: e.target.value })} />
                            <button onClick={() => setStatus("show")}>שמור</button>
                        </form>
                        : <></>
                }

            </div>


        </>
    )
}