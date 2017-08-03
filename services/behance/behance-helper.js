let ids=[]; 
let images=[]; 

function getBehance(req, res) {
  fetch(`http://www.behance.net/v2/projects/?api_key=${process.env.BEHANCE_KEY}`)
    .then((res) => {
        return res.json();
    }).then((jsonRes) => {
        console.log (typeof jsonRes.projects);
       // console.log(jsonRes.projects);

        for (let x of jsonRes.projects){
           // console.log(x.id)
            ids.push(x.id); 
        }
    getIndividualProjects(ids);
 //res.locals.visuals = images;

    })
};

function getIndividualProjects(arr){
    console.log ("function runs"); 
    const promiseArr = arr.map((id) => {
        return fetch(`http://www.behance.net/v2/projects/${id}?api_key=${process.env.BEHANCE_KEY}`)
        .then((res) => {
            return res.json();
           // console.log (res);
        })/*.then((jsonRes) => {
        console.log (jsonRes.project.module[0]);
             console.log ("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&**********************")

    });*/
    });
  Promise.all(promiseArr)./*then(res => console.log(res));*/
  then((res)=>{
      console.log("bob"); 
   //console.log(res); 
      for (i of res){
            //   console.log (i.project.modules);
        let project = i.project.modules;   
        for(i of project){
            console.log("&&&&&&&&&&&")
         //   console.log(i.src);
            console.log("^^^^^^^^^^^^^^^")
          //  console.log(i.src);
          if (i.src!==undefined){
            images.push(i.src);
          }
            
        }
              //console.log (i.project.id);
              //console.log ("__________________________"); 
             // res.locals.visuals = project;
            
      }
     console.log(images); 
     
     
  });
}

module.exports = {
  getBehance,
  getIndividualProjects,
}





