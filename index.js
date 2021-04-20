(function(){

    /**
     * The class to manage the random generator
     * @constructor
     */
    var RandomManager = function() {
        /**
         * Initialize the values box
         * @type {*|jQuery|HTMLElement}
         */
        var $valuesBox = $('#values');

        /**
         * The 
         
         
         for the tool
         * @type {*|jQuery|HTMLElement}
         */
        var $instructions = $('#instructions');

        /**
         * The chooser box
         * @type {*|jQuery|HTMLElement}
         */
        var $chooserBox = $('#chooser');

        /**
         * The results box
         * @type {*|jQuery|HTMLElement}
         */
        var $resultBox = $('#results');

      var $startButton = $('#startGame');
      var $valueContainer = $('#valuesBox');
      var $mimeResultsPicker = $('#mimeResultsPicker');
      var $resetter = $('#resetter');
      var arrayOfChoosen = [];
        /**
         * The initialization function sort of
         *
         * This handles adding all the handlers the DOM items
         */
        function addHandlers()
        {
         // $valuesBox.on('change keyup blur', handleBoxChange);
          $startButton.on('click', 'button', handleBoxChange);
            $chooserBox.on('click', 'button', chooseWinner);
          $resetter.on('click', 'button', Reset);
        
        }
      
      function hideHandleBox(){
        console.log("being tirggered");
      }

        /**
         * When the textarea changes, handle it
         */
        function handleBoxChange()
        {
            if ($valuesBox.val().trim() === '') {
                $resultBox.fadeOut(200).empty();
                $chooserBox.fadeOut(200, function() {
                    $instructions.fadeIn(200);
                });
             
            }
            else {
                $instructions.fadeOut(200, function() {
                    $chooserBox.fadeIn(200);
                   $mimeResultsPicker.fadeIn(200);
                  $valueContainer.fadeOut(200);
                });
            }
        }

        /**
         * Iterates through the winner and chooses
         */
        function chooseWinner()
        {
            var values = $valuesBox.val().trim().split("\n");
            if (values.length == 1) {
                handleOneWinner(values);
            }
            else {
                var chopIt = false;
                // if it's too small, let's add some more to it for a cool look
                if (values.length < 20) {
                    values.push.apply(values, values);
                }
                else if (values.length > 50) {
                    chopIt = true;
                }
                shuffleValues(values);
                if (chopIt) {
                    // if it's too long, the animation will suck!
                    values = values.slice(0, 50);
                  console.log("values after chopped", values);
                }

                  console.log("values", values[0]);
              arrayOfChoosen.push(values[0]);
                 if(arrayOfChoosen.length > 1){
                   if (arrayOfChoosen.includes(values[0])){
                  animateResults(values);
               shuffleValues(values);
                console.log("duplicate value",arrayOfChoosen);
                   }
              }
             
           
                animateResults(values);
            }
        }

     
        /**
         * Show the results in an animated fashion
         * @param values
         */
        function animateResults(values)
        {
            $resultBox.show();
            // $resultBox[0].scrollTop = 0;
            $resultBox.empty();

            var resultList = $('<ul />');
            $.each(values, function(i, value) {

              //resultList.append(value)
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(value));
                resultList.append(li);
              //console.log("values picked", value)
            });

            $resultBox.append(resultList);
            
            // $resultBox.animate({
            //     scrollTop: $resultBox[0].scrollHeight
            // });
        }

        /**
         * Shuffle the values
         * @param values
         */
        function shuffleValues(values)
        {
            for (var i = values.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = values[i];
                values[i] = values[j];
                values[j] = temp;
             
            }
          
          
         
        }

        /**
         * When people are being silly and choose only one entry
         */
        function handleOneWinner(values)
        {
            var winner = values[0];
            $('main').html('<div class="jumbotron"><h1>ERROR!</h1><h2>There is only one word!</h2>');
        }

       function Reset(){
    $chooserBox.fadeOut(200);
                   $mimeResultsPicker.fadeOut(200);
                  $valueContainer.fadeIn(200);
  }
        // init the logic
        addHandlers();
       $mimeResultsPicker.fadeOut(200);
    };
  
 

    // create the object - it's self managed
    new RandomManager();
})();
