
const defaultNumOfPixels = 16;

let sketchpad = document.querySelector('#sketchpad');
drawPixels(defaultNumOfPixels);

function drawPixels(numOfPixels){
  for(let i=0; i<numOfPixels; i++){
    //Create pixel row
    pixelRow = document.createElement('div');
    pixelRow.classList.add('pixelRow');
    sketchpad.appendChild(pixelRow);

    for(let j=0; j<numOfPixels; j++){
      pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelRow.appendChild(pixel);
    }
  }

  pixels = document.querySelectorAll('.pixel');
  pixels.forEach(myPixel => {
    myPixel.addEventListener('mouseenter', ()=> {
      myPixel.style.cssText = "background-color: #C9B7C9;";
    })
  })
}



changePixelBtn = document.querySelector('.button');
changePixelBtn.addEventListener('click', onChangePixelsTap);

function onChangePixelsTap(){
  let input = prompt('Specify the size of grids. Example: 16 for a 16x16 grid.')
  input = +input;
  if(typeof(input) != 'number' || input === 0){
    return;
  }else{
    resetSketchPad();
    console.log(input);
    drawPixels(input);
  }
}

function resetSketchPad(){
  pixelRows = document.querySelectorAll('.pixelRow');
  pixelRows.forEach(myPixelRow => {
    sketchpad.removeChild(myPixelRow);
  })
}
