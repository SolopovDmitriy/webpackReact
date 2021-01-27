'use strict';

//import Colors from 'colors';

export default  class Logger {
    log(message) {
        console.log("Важное сообщение: --------------start");
        //console.log(Colors.red(message));
        console.log(message);
        console.log("Важное сообщение: --------------end");
    }
}
