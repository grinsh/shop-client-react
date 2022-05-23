import "./OrdersList.css"

export default function OrdersList(){
    const orders = [
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
            id: 124,
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
            id: 125,
            ordDate: new Date(),
            arrivalDate: new Date(),
            address: "רבי עקיבא 5 בני ברק",
            phone: "0504121234",
            email: "safaj@gmail.com",
            complete: true,
            userId: 1,
            products: []  //לכאן יוכנס מערך של מוצר
    
        }
    ]


    return(
        <>
            <h1>Orders List</h1>
            {
                orders.map((o)=><p key={o.id}>{o.id}  |  {o.arrivalDate.toDateString()}  |  {o.address}  |  {o.complete?'V':'?'}</p>)
            }
        </>
    )
}