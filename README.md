# Cox-Clutch
Select Info from GeoCode Database


a ) This is a NODE.JS code
b ) Replace the GOOGLE API KEY in line 12 for your own GOOGLE API Key 
c ) Replace the Pool and Client connection parameters for your own connection Info.
d ) Create a POSTMAN GET request with one parameter called "Address" and pointing to the server mentioned in step "C" and using as router "/readDB". Samplebelow.
d ) Using VS Code, load the code (server.js) and open a "Terminal" session then run: node server.js
e ) After you received the message "Database connection is completed and ready for Postman!" then you are ready to execute the POSTMAN GET call (the rouetr name is /readDB).

    My sample:	
	GET: http://localhost:3000/readDB/?Address=2975 Bancoft Glen, Kennesaw
