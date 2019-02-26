export const ADDBILL = 'ADDBILL'
export const DELETEBILL = 'DELETEBILL'
export const DELETECHART = 'DELETECHART'

export const addBill = (billCategory, billName, billAmount, billDueDate) => ({
    type: ADDBILL,
    billData: {
        billCategory,
        billName,
        billAmount,
        billDueDate
    }
})

export const deleteBill = (billName) =>({
    type: DELETEBILL,
    billName
})

export const deleteChart = () => ({
    type: DELETECHART
})