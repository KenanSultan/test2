$.ajax({
    url: "https://www.goodreads.com/search/index.xml",
    data: {
        key: "5OVwGm0ylIwc1aSv8PamQ",
        q: "Improbable"
    },
    method: "GET"
}).then(function(resp) {
    console.log(resp)
})