//router
const router = async () => {
    const routes = [
        {path: "/", view:() => console.log('Vue Dashboard')},
        {path: "/post", view:() => console.log('Vue Post')},
        {path: "/settings", view:() => console.log('Vue Settings')}
    ]
    //match
    const potencialMatches = routes.map(route =>{
        return{
            route: route,
            isMatch: location.pathname === route.path
        }
    })
    //console.log(potencialMatches)
     let match = potencialMatches.find(potencialMatch => potencialMatch.isMatch)

     if(!match){
         match = {
            route: routes[0],
            isMatch: true
         }
     }
     console.log(match)
}

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})