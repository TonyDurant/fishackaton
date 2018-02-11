var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://budgt.me/api/v1/me",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXgiLCJpZCI6IjVhNDA2NjU4YWMxYWVmNDdlYzVkNDE0NSIsImV4cCI6MTUxNjU2MDYzMn0.eDqTSHY84tDvbasFlM5A6oANUdn-3Cqmf7yrykkzt7Smu7o6tjgOmhpPV1uwxbPgVvXOQEgOXWn8Yd5SwNLkyg"
    },
    "processData": false,
    "data": ""
}

$.ajax(settings).done(function (response) {
    console.log(response);
});