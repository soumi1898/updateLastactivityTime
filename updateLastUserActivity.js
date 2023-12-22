var posts=[];
var index=0;
var lastActivityTime;

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            var currentdate = new Date(); 
            lastActivityTime = "User last activity time: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
            resolve(lastActivityTime);
        },1000);
        
    });
}


function createPost(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let post='POST'+ ++index;
            posts.push({title: post});
            resolve();
        }, 2000)
    }) ;
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}


function getPost()
{
    setTimeout(()=>{
        let output='';
        posts.forEach((a,index)=>{
            output+=`<li>${a.title}</li>`;
        });
        document.body.innerHTML=output;
        console.log(posts);
        console.log(lastActivityTime);
    },2000);
}

createPost().then(()=>updateLastUserActivityTime())
            .then(()=>getPost())
            .then(()=>deletePost().then((val)=>console.log(val)).catch((err)=>console.log(err)));