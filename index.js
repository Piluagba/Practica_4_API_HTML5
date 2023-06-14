
    if (window.File && window.FileReader && window.FileList) {
      console.log('Todas las APIs soportadas');
    } else {
      alert('La API de FILE no es soportada en este navegador.');
      }
    function handleFileSelect(e) { 
      let file = e.target.files[0];
      let video = document.getElementById("video");

      if (file && file.type.includes('video/')) {
      let reader = new FileReader();
      reader.onload = function (e) {
        video.src = e.target.result;
        video.style.display = "block";
        video.play();
        alert('Vídeo cargando...');  
      };
      reader.onerror =function (e) {
        alert('Ha ocurrido un error al leer el archivo.');
      };

      reader.readAsDataURL(file);
      }
      else {
        alert('Error: Por favor, selecciona un archivo de vídeo válido.');
        }
      }

      document.getElementById('file-input').addEventListener('change', handleFileSelect);









      

     
  
        
  
    

      