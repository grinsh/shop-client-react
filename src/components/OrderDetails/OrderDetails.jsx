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
            complete: true,
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


            <div>
                <button onClick={() => { setStatus("edit") }}>✏</button>
                <button onClick={() => { setStatus("add") }}>➕</button>
                <button onClick={deleteOrder}>❌</button>

            </div>
            {status == "show" && order ?
                <div className="card">
                    <p>הזמנה מספר {order.id}</p>
                    <p>תאריך אספקה {order.arrivalDate.toDateString()} </p>
                    <p>כתובת {order.address}</p>
                    <p>טלפון ליצירת קשר {order.phone}</p>
                    {order.complete == true ? <p>ההזמנה בוצעה בהצלחה!</p> : <p>ביכולתך לבחור מוצרים נוספים או לסגור הזמנה</p>}
                    {order.complete == false && <button>סגור הזמנה</button>}
                </div> : order ?

                    <form className="card">
                        {status == "add" ? <h1>הוספת הזמנה</h1> : <h1>עריכת הזמנה</h1>}
                        <input type="text" value={order.id} onChange={e => setOrder({ ...order, id: e.target.value })}/>
                        <input type="text" value={order.arrivalDate.toDateString()} onChange={e => setOrder({ ...order, arrivalDate: e.target.value })}/>
                        <input type="text" value={order.address} onChange={e => setOrder({ ...order, address: e.target.value })}/>
                        <input type="text" value={order.phone} onChange={e => setOrder({ ...order, phone: e.target.value })}/>
                        <button onClick={()=>setStatus("show")}>שמור</button>
                    </form>
                    : <></>

            }
        </>
    )
}