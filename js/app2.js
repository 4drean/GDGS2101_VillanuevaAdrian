if(navigator.serviceWorker){
    navigator.serviceWorker.register("./sw.js")
  }
  if(window.caches){
    caches.open("uno");
    caches.open("dos");
  
    /*caches.has("dos")
        .thes(console.log);
    caches.delete("uno")
        .thes(console.log);*/
    /*caches.open("chache v1").
        then(cache=>{
            //cache.add("/index.html",);
            cache.addAll([
                "/index.html",
                "/css/style.css",
                "/js/app.js"
            ])
            .then(() =>{
                //cache.delete("/css/style.css");
                //cache.put("/index.html",new response("index remplazado"))
            });
            
            caches.match("/index.html")
                .then(resp=>{
                    resp.text()
                        .then(console.log);
                })
        });*/
        caches.keys().then(resp=>{
            console.log(resp);
        })
  }