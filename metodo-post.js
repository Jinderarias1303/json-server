const data = {
    title :"c4-server",
    autor:"v10",
    id:3,
};

fetch(" http://localhost:3004/posts/",{
    method:"POST",
    headers:{
        "content-Type":"application/JSON",
    },
    body: JSON.stringify(data),
    })
    .then((response)=> response.json())
    .then((data)=> console.log("succes:",data))
    .then((error)=>console.error("error:",error))
    