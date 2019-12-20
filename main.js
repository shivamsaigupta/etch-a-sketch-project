sketchpad = document.querySelector('#sketchpad');

const NUM_PIXELS = 32;

for(let i=0; i<NUM_PIXELS; i++){
  //Create pixel row
  pixelRow = document.createElement('div');
  pixelRow.classList.add('pixelRow');
  sketchpad.appendChild(pixelRow);

  for(let j=0; j<NUM_PIXELS; j++){
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelRow.appendChild(pixel);
  }
}

pixels = document.querySelectorAll('.pixel');
pixels.forEach(myPixel => {
  myPixel.addEventListener('mouseenter', ()=> {
    myPixel.style.cssText = "background-color: black;";
  })
})
