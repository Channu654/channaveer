async function apiCall(url) {
 
     try{
         let res =await fetch(url)
         let data = res.json()
         return data

     } catch(err){
         console.log(err)
     }

    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach ((e) => {

        let div = document.createElement("div")

        let images = document.createElement("img")
        images.src = e.urlToImage;
    
    let Title = document.createElement("p")
    Title.textContent=e.title;

    let des=document.createElement("p")
    des.textContent=e.content;

     div.append(images , Title , des)
         
         main.append(div) 
        div.onclick= () => {
            localStorage.setItem ("News",JSON.stringify(e))
            window.location.href ="search.html"
        }
    })

}
export { apiCall, appendArticles }