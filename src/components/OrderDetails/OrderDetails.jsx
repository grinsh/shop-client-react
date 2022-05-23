import "./OrderDetails.css"

export default function OrderDetails() {
    const order = {
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

    return (
        <>
            <h1>Order Details</h1>
            <div className="card">
               <p>הזמנה מספר {order.id}</p>
                 <p>תאריך אספקה {order.arrivalDate.toDateString()} </p> 
                 <p>כתובת {order.address}</p>
                <p>טלפון ליצירת קשר {order.phone}</p>
                {order.complete == true ? <p>ההזמנה בוצעה בהצלחה!</p> : <p>ביכולתך לבחור מוצרים נוספים או לסגור הזמנה</p>}
                {order.complete == false && <button>סגור הזמנה</button>} 
            </div>
        </>
    )
}