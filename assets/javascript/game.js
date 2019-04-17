$.ajax({
    url: "https://www.goodreads.com/search/index.xml",
    data: {
        key: "5OVwGm0ylIwc1aSv8PamQ",
        q: "Improbable"
    },
    method: "GET",
    dataType: "xml",
    success: function(xml){
        var data = $('doctor',xml).text()
        alert(data)
    }
}).then(function(resp) {
    console.log(resp)
})