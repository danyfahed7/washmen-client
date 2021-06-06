import React from 'react'

export const Partners = ({partners}:{partners:any[]}) => {

    console.log('partners length:::', partners.length)
    if (partners.length === 0) return null

    const PartnerRow = (partner:any,index:any) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  {/* <td>{partner.id}</td>  */}
                  <td>{partner.organization}</td>                    
                  <td>{partner.addressInRange}</td>                  
                  {/* <td>{partner.distance}</td> */}
              </tr>
          )
    }

    const partnerTable = partners.map((partner:any,index:any) => PartnerRow(partner,index))

    return(
        <div className="container partners-grid">
            <h2>Partners ({partners.length})</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    {/* <th>Partner ID</th> */}
                    <th>Partner Name</th>
                    <th>Address</th>
                    {/* <th>Distance</th> */}
                </tr>
                </thead>
                <tbody>
                    {partnerTable}
                </tbody>
            </table>
        </div>
    )
}