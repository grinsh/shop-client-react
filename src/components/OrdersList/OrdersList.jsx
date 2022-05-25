import { useEffect, useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails"
import "./OrdersList.css"

export default function OrdersList() {
    const [orders, setOrders] = useState([]);
    const [searchResultOrders, setSearchResultOrders] = useState([]);

    useEffect(() => {
        const dataFromServer = [
            {
                id: 123,
                ordDate: new Date(),
                arrivalDate: new Date(),
                address: "לוי 5 בני ברק",
                phone: "0504121234",
                email: "safaj@gmail.com",
                complete: true,
                userId: 1,
                products: []  //לכאן יוכנס מערך של מוצר

            },
            {
                id: 115,
                ordDate: new Date(),
                arrivalDate: new Date(),
                address: "לוי 5 בני ברק",
                phone: "0504121234",
                email: "safaj@gmail.com",
                complete: false,
                userId: 1,
                products: []  //לכאן יוכנס מערך של מוצר

            },
            {
                id: 118,
                ordDate: new Date(),
                arrivalDate: new Date(),
                address: "רבי עקיבא 5 בני ברק",
                phone: "0504121234",
                email: "safaj@gmail.com",
                complete: true,
                userId: 1,
                products: []  //לכאן יוכנס מערך של מוצר

            }
        ];
        setOrders(dataFromServer);
        setSearchResultOrders(dataFromServer);
    }, [])

    let searchText = "";

    const searchOrder = (text) => {

        searchText = text;
        if (text == "")
            setSearchResultOrders([...orders]);
        else {
            const filteredArr = orders.filter(o => o.id == text);
            setSearchResultOrders(filteredArr);
        }

    }

    const sortByComplete = () => {
        const modifiedSearchArr = [...searchResultOrders]
        const sortedArr = modifiedSearchArr.sort((a, b) => { return b.id - a.id });
        setSearchResultOrders([...sortedArr]);
    }
    return (
        <div className="col-6 m-auto">
        
            <h1>הזמנות שמורות</h1>
            <input type="search" placeholder="הכנס קוד הזמנה"
                onChange={(e) => { searchOrder(e.target.value) }}  className="form-control" />
            <button onClick={sortByComplete} className="btn btn-default">מיין לפי הזמנות שהושלמו</button>
        

            <div class="accordion" id="accordionExample">
                {
                    searchResultOrders.map(o =>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#item' + o.id} aria-expanded="false" aria-controls={'item' + o.id}>
                                    {o.id}  |  {o.arrivalDate.toDateString()}  |  {o.address}       </button>
                            </h2>
                            <div id={'item' + o.id} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    פרטי הזמנה
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}