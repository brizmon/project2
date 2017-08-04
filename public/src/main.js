

//  $('button').click(()=>{
const sendToDB = font => {
    console.log(`Saving ${font.family} to the database`)
    console.log('we are in the send funct')
    $.ajax({
      url:'fonts/',
      method: 'POST',
      data: font
    }).done( data =>{
        console.log (data); 
    })
  }

let font={
    family:"bob"
}
// sendToDB(font); 
// });


function changeCSS(cssFile, cssLinkIndex) {

   var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

   var newlink = document.createElement("link");
   newlink.setAttribute("rel", "stylesheet");
   newlink.setAttribute("type", "text/css");
   newlink.setAttribute("href", cssFile);

   document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}