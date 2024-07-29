import './transactionTable.scss'


const TransactionTable = () => {
    const table=[
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        {name:''},
        
    ]
    return ( 
        <div className="transaction-table component-shadow-2">
<table>
    <thead
    className='lato-bold'
    >


    <tr>
            <td>
                transaction type
            </td>
            <td>
                amount
            </td>
            <td>
                date
            </td>
            <td>
                time
            </td>
            <td>
                status
            </td>

        </tr>
    </thead>

    <tbody
    className='lato-light'
    >

       {
        table.map((e)=>(
            <tr>
            <td>
                reno
            </td>
            <td>
                reno
            </td>
            <td>
                reno
            </td>
            <td>
                reno
            </td>
            <td>
                reno
            </td>

        </tr>

        ))
       }

        
    </tbody>
    <tfoot></tfoot>
</table>
        </div>
     );
}
 
export default TransactionTable;