# simple-rsa
This is a simple demostration how rsa encryption key work underneath the hood. I pick out of interest and spend a few amount of time to understood the concept and implement it myself

Based on the following youtube [video](https://www.youtube.com/watch?v=wXB-V_Keiu8), I decided to see rsa in action. Here are the js file does

- Client:
  - the computer used by the user. User usually will send the public key to another user/server. So, I mimic this behavoir using `sendPublicKey` method
  - user also can send message to other user via the WAN or the internet. From here, internet will broadcast the message to the sender.
  - user then decrypt the message to retrieved it

- Internet:
  - message must go through internet to be send to the client.
  - However, in case of router, other people can sniff the packet/message sent. However, without public and private, they cannot decrypt the message unless using brute force method
  
  I still face problem in implemting the RSA mainly
  - RSA require 2 prime number and exponent constant which are co-prime to the phi(N). This condition are difficult to meet for not all phi(N) has co-prime. Hence, generating random prime difficult to implement
  - node do not have BigInt data type, at least in ES2015. hence to select a really big prime is an issue. Since modulo need to be performed in decrypting the key, I cannot decrypt a long string of character.
