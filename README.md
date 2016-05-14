## Install
 In the root of the project run
 ``
 npm install
 ``

## Run the project

 In the root of the project run

 ``
 node ping/ping.js
 ``

This will run the ping app in the port 9000, open http://localhost:9000/api/v1/ping/message
 to send a message
 
 ```
 node pong/pong.js
 ```
 This will run the pong in the port 9001, open http://localhost:9001/api/v1/pong/message/count
 to get an object like this 

>{"messagesProcessed":2,"lastMessageId":4}

messagesProcessed is the count for the messages this pong app have processed and lastMessageId is the id of the last message this pong app has processed.