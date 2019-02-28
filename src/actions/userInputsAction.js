export const ADDBILL = 'ADDBILL'
export const DELETEBILL = 'DELETEBILL'
export const DELETECHART = 'DELETECHART'

export const addBill = (item) => ({
    type: ADDBILL,
    billData: {
        billCategory: item.billCategory,
        billName: item.billName,
        billAmount: item.billAmount,
        billDueDate: item.billDueDate
    }
})

export const deleteBill = (item) =>({
    type: DELETEBILL,
    billData:{
        billCategory: item.billCategory,
        billName: item.billName,
        billAmount: item.billAmount,
        billDueDate: item.billDueDate
    }
})

// export const deleteChart = () => ({
//     type: DELETECHART
// })