$.get("/api/tables").then(function (data) {
    for (let i = 0; i < data.length; i++) {
        const newCard = $("<div>");
        newCard.addClass("resCard");
        const nameHeader = $("<h4>")
        nameHeader.text(data[i].name)
        const phonePara = $("<p>")
        phonePara.text(data[i].phone);
        const emailPara = $("<p>")
        emailPara.text(data[i].email);
        newCard.append(nameHeader,phonePara,emailPara);
        $(".tablesDiv").append(newCard);
    }
})
$.get("/api/waitlist").then(function (data) {
    for (let i = 0; i < data.length; i++) {
        const newCard = $("<div>");
        newCard.addClass("resCard");
        const nameHeader = $("<h4>")
        nameHeader.text(data[i].name)
        const phonePara = $("<p>")
        phonePara.text(data[i].phone);
        const emailPara = $("<p>")
        emailPara.text(data[i].email);
        newCard.append(nameHeader,phonePara,emailPara);
        $(".waitlistDiv").append(newCard);
    }
})