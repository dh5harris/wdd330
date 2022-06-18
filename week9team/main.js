/****************************************
 * PLAY SOUND
 * THis function will play the audio sound
 * ****************************************/
function playSound(keySound, key, counter)
{
        //If the Key is pressed, play the sound
        if(keySound)
        {
            key.classList.add('playing')
            keySound.currentTime = 0.0;
            keySound.play()
            console.log(keySound.duration)
            key.addEventListener('transitionend', () => {
                key.classList.remove('playing')
            });
            
            if(counter < 10) {
                key.classList.add('moving')
            }
            else {
                key.classList.remove('moving')
            }
            console.log(counter);
        }
}

/****************************************
 * LISTEN FOR KEY
 * THis function will Listen for the user's 
 * key presses
 * ****************************************/
function listenForKey()
{
    let counter = 0;

    document.addEventListener('keydown', (event) => {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        console.dir(audio)
    
        const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

        counter++;
        //Call the function to play the Sound
        playSound(audio, key, counter)

      });
}

/****************************************
 * MAIN
 * THis function will call the first function
 * to start the program
 * ****************************************/
function main()
{
    //Listen for the Key
    listenForKey();
}

//Call main to start Program
main();

