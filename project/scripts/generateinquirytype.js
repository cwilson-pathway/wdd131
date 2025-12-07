const inquiryType = document.querySelector("#inquiry");
const selections = [
    {
        name: "Contract",
        value: "contract"
    },
    {
        name: "Commission", 
        value: "commission"
    },
    {
        name: "Interview", 
        value: "interview"
    },
    {
        name: "Fan Mail", 
        value: "fanmail"
    },
    {
        name: "Other",
        value: "other"
    }];

selections.forEach(selection => {
    const option = document.createElement("option");
    option.setAttribute("value", selection.value);
    option.textContent = selection.name;
    inquiryType.appendChild(option);
});