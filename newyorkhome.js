
newyork();
myhome();
document.body.style.backgroundColor = "#E8E8E8";
document.body.id = "bdy";

var ulist,fresult;
function newyork() {
    
    // cnt = document.createElement('div');
    // cnt.className = "container";
    // cnt.id = "conty";
    var newelement = document.createElement('nav');
    newelement.className = "navbar sticky-top navbar-expand-lg navbar-light bg-light";
    newelement.id = "navid";
    var logo = document.createElement('a');
    logo.className = "navbar-brand ";
    //logo.style.border = "none";
    // logo.href = 'http://127.0.0.1:5500/callback/newyorkapihome.html';
    logo.innerHTML = "New York Times";
    var division = document.createElement('div');
    division.className = "collapse navbar-collapse";
    division.id = "navbarNav";
    ulist = document.createElement('ul');
    ulist.className = "navbar-nav mr-auto mt-2 mt-lg-0";
    var item = document.createElement('li');
    item.className = "nav-item ";
    var anchor1 = document.createElement('button');
    anchor1.className = "nav-link btn active";
    anchor1.innerHTML = "HOME";
    anchor1.style.border = "none";
    anchor1.id = 'home';
    var burger = document.createElement('button');
    burger.className = 'navbar-toggler';
    burger.type = 'button';
    burger.setAttribute('data-toggle', 'collapse');
    burger.setAttribute('data-target', '#navbarNav');
    burger.target = "#navbarNav";
    var Span = document.createElement('span');
    Span.className = "navbar-toggler-icon";
    burger.append(Span);
    

    item.append(anchor1);
    ulist.append(item);
    createelement('WORLD', 'world');
    createelement('POLITICS', 'politics');
    createelement('MAGAZINE', 'magazine');
    createelement('TECHNOLOGY', 'technology');
    createelement('SCIENCE', 'science');
    createelement('HEALTH', 'health');
    createelement('SPORTS', 'sports');
    createelement('ARTS', 'arts');
    createelement('FASHION', 'fashion');
    createelement('FOOD', 'food');
    createelement('TRAVEL', 'travel');


    division.append(ulist);
    newelement.append(logo, division,burger);

    document.body.append(newelement);
    // document.body.append(cnt);
}
     async function myhome() {
        try {
            let resph = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pYoT3yopZbquBOP3kbvTm6CCGUoixskp');
            let resulth = await resph.json();
    
            fresult = resulth.results;
            //console.log(fresult);
            for (i in fresult) {
                let Abstract = fresult[i].abstract;
                let Date = fresult[i].published_date.slice(0, 10);
                let Section = fresult[i].subsection;
                let Title = fresult[i].title;
                let Writer = fresult[i].byline;
                let Readlink = fresult[i].url;
                let Imagelink = fresult[i].multimedia[0].url;
                 let Itemtype=fresult[i].item_type;
    
                createpost(Date, Section, Title, Abstract, Writer, Readlink, Imagelink,Itemtype);
        
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    

   
function createelement(data, nav_id) {
    var listelement = document.createElement('li');
    listelement.className = "nav-item";
    var anchorelement = document.createElement('button');
    anchorelement.id  = nav_id;
    anchorelement.className = "btn nav-link ";
    anchorelement.style.border = "none";
    anchorelement.innerHTML = data;
    listelement.append(anchorelement);
    ulist.append(listelement);
}
function createpost(date, section, title, abstract, writer, readlink, imagelink,type) {

    var cnt = document.createElement('div');
    cnt.className = "container";
    cnt.id = "cont";
    let outerelement = document.createElement('div');
    outerelement.className = "card  bg-light";
    outerelement.id = "outer";
    let raw = document.createElement('div');
    raw.className = "row no-gutters rounded-top ";
    raw.style.borderTop = "1px solid";
    raw.style.padding = "15px ";
    raw.style.borderLeft = "0px";
    let innerelement = document.createElement('div');
    innerelement.className = "col-lg-1 date-card text-secondary text-center font-weight-light ";
    innerelement.innerHTML = date;
    innerelement.style.border = "no-border";
    let middleelement = document.createElement('div');
    middleelement.className = "card col-lg-7 border-0";
    let cardbody = document.createElement('div');
    cardbody.className = "card-body";
    let itemtype = document.createElement('p');
    itemtype.className = "font-weight-light text-muted";
    itemtype.innerHTML = "Description: "+ type;
    let cardsection = document.createElement('div');
    cardsection.className = "section-card text-uppercase";
    cardsection.innerHTML = section;
    let cardtitle = document.createElement('div');
    cardtitle.className = "card-title";
    cardtitle.innerHTML = title;
    cardtitle.style.fontFamily = "nyt-cheltenham";
    cardtitle.style.fontSize="30px"
    let cardabstract = document.createElement('p');
    cardabstract.className = "abstract-card";
    cardabstract.innerHTML = abstract;
    cardabstract.style.fontFamily = "nyt-imperial";
    let writtenby = document.createElement('p');
    writtenby.className = "card-text writer";
    let smalltxt = document.createElement('small');
    smalltxt.className = "text-muted ";
    smalltxt.innerHTML =  writer;
    writtenby.append(smalltxt);
    let continuereads = document.createElement('div');
    continuereads.className = "continueread";
    let anchor = document.createElement('a');
    anchor.href = readlink;
    anchor.innerHTML = "Continue Reading...";
    continuereads.append(anchor);
    cardbody.append(cardsection,itemtype, cardtitle, cardabstract, writtenby, continuereads);
    middleelement.append(cardbody);
    let lowerelement = document.createElement('div');
    lowerelement.className = "card col-lg-4 overflow-hidden border-0";
    let imagetag = document.createElement('img');
    imagetag.className = "img-thumbnail";
    imagetag.src = imagelink;
    lowerelement.append(imagetag);
    raw.append(innerelement, middleelement, lowerelement);
    outerelement.append(raw);
    cnt.append(outerelement);
    document.body.append(cnt);
}

 function worldfun(e) {
    console.log(e.target.id);
    //e.target.className = "active";
    // for (j in fresult) {
    //     var myobj = document.getElementById("cont");
    //             myobj.remove();
    // // }
     document.getElementById('home').className = " btn nav-link";
    var paras = document.getElementsByClassName('container');

    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
     
    async function worldnews() {
        try {
            let resph = await fetch('https://api.nytimes.com/svc/topstories/v2/'+e.target.id+'.json?api-key=pYoT3yopZbquBOP3kbvTm6CCGUoixskp');
            let resulth = await resph.json();
            console.log(resulth);
            fresult = resulth.results;
            for (i in fresult) {
                let Abstract = fresult[i].abstract;
                let Date = fresult[i].published_date.slice(0, 10);
                let Section = fresult[i].section;
                let Title = fresult[i].title;
                let Writer = fresult[i].byline;
                let Readlink = fresult[i].url;
                let Imagelink = fresult[i].multimedia[4].url;
                let Itemtype = fresult[i].item_type;
    
                createpost(Date, Section, Title, Abstract, Writer, Readlink, Imagelink,Itemtype);
        
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    worldnews();

}

document.getElementById('world').addEventListener("click", worldfun);
document.getElementById('politics').addEventListener("click", worldfun);
document.getElementById('magazine').addEventListener("click", worldfun);
document.getElementById('technology').addEventListener("click", worldfun);
document.getElementById('science').addEventListener("click", worldfun);
document.getElementById('health').addEventListener("click", worldfun);
document.getElementById('sports').addEventListener("click", worldfun);
document.getElementById('arts').addEventListener("click", worldfun);
document.getElementById('fashion').addEventListener("click", worldfun);
document.getElementById('food').addEventListener("click", worldfun);
document.getElementById('travel').addEventListener("click", worldfun);
document.getElementById('home').addEventListener("click", worldfun);


