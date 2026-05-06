# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Aidan Fuller \
Name: Maxime Vergnet

## 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, you would not use a unit test to test the "message" feature because there are too many moving parts to account for: there are multiple phones attached to different users and likely connected to different cell towers or configured with different settings. Simply using a unit test wont guarantee that all features will work properly - for example if you only test for message content, there could be other undesirable issues with excess bandwidth use or excessive time taken to send the message. 

## 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, you would use a unit test to test the max message length feature. This is a small enough feature that does not interfere or collaborate much with other features so a unit test would be perfect to do some isolated testing. It is a small, self-containted and deterministic feature which is perfect for unit testing.

## Github pages links:

Expose: [https://aidanfuller9.github.io/Lab5_Starter/expose.html]

Explore: [https://aidanfuller9.github.io/Lab5_Starter/eplore.html]