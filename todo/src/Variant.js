const getVariant = (dueDate) => {

    const date = new Date();
    const duedate = new Date(dueDate);

    const new_dueDate = Math.ceil((duedate - date)/(1000*60*60*24));

    if (new_dueDate > 7) {
        return "primary";
    }
    else if (new_dueDate < 7 && new_dueDate > 4) {
        return "success";
    }
    else if (new_dueDate < 4 && new_dueDate > 2) {
        return "warning";
    }
    else {
        return "danger";
    }

};

export default getVariant;