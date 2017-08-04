

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