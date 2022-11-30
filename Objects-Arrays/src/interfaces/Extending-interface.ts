interface paint{
    color: string,
    grade: string
}

interface material{
    qnt: number,
    effort: number
}

//one interface extends the properties of another. Similar to java
interface company extends paint, material{
    empCount: number,
    empName: string
}

var companyInfo : company ={
    color: "red",
    grade: "a",
    qnt: 12,
    effort: 55,
    empCount: 33,
    empName: "HAH"
}