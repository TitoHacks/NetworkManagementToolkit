
        const classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/S5KESe9vY/model.json", modelLoaded);

        // When the model is loaded
        function modelLoaded() {
        console.log('Model Loaded!');
        }

        
            var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };


        function predict(){
            classifier.classify(document.getElementById('output'), (err, results) => {
         console.log(results[0].label);
         var res = document.getElementById('resultado');
         var sol = document.getElementById('solucion');
         var parrafo = document.createElement("a");
         res.innerHTML = "Result: " +  results[0].label;

         if(results[0].label == "WannaCry"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://bestsecuritysearch.com/detailed-wannacry-ransomware-removal-guide-complete-recovery-instructions-2/");

         }
         if(results[0].label == "BadRabbit"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://bestsecuritysearch.com/remove-bad-rabbit-virus-computer/");

         }
         if(results[0].label == "Cerber"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://bestsecuritysearch.com/remove-cerber-readme-ransomware/");
         }
         if(results[0].label == "Cryptolocker"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://www.2-spyware.com/remove-cryptolocker.html");

         }
         if(results[0].label == "Maze"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://www.pcrisk.com/removal-guides/15133-maze-ransomware");

         }
         if(results[0].label == "Petya"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://www.proofpoint.com/es/threat-reference/petya");

         }
         if(results[0].label == "SimpleLocker"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://www.2-spyware.com/remove-simplelocker-ransomware.html");

         }
         if(results[0].label == "TeslaCrypt"){
             sol.innerHTML = "SOLUTION";
             sol.setAttribute("href", "https://www.2-spyware.com/remove-teslacrypt-virus.html");
         }
        });

        }

        // Make a prediction with a selected image
       
