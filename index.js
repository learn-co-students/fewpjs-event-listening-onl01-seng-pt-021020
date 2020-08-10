function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

//the input constant holds the node that does the listening, aka the input id node

//the input constant has the addEventListener invoked
  //first argument is the event name to listen for, the click
  //second is the callback function. this is executed when the node hears the event


  
