function harmlessRansomNote(note, magazine){
  arrayMag = magazine.replace(/[^\s\dA-Z]/gi, '').trim().toLowerCase().split(" ");
  arrayNote = note.replace(/[^\s\dA-Z]/gi, '').trim().toLowerCase().split(" ")
  console.log(arrayMag);
  
  let objMag = {};
  for(let i = 0; i < arrayMag.length; i++){
    let word = arrayMag[i];
    if(objMag[word]){
      objMag[word] += 1;
    } else {
      objMag[word] = 1
    }
  }
  
  for(let j = 0; j < arrayNote.length; j++){
    let word = arrayNote[j]
    if(!objMag[word]){
      return false;
    } else {
      objMag[word] -= 1;
      if(objMag[word] < 0){
        return false;
      }
    }
  }
  return true;
}