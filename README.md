# w2json-nodejs-cli-app
It is a w2json(Write to JSON file) CLI(command line interface) appliation using nodejs.<br>
It can be used to **add,remove and view** the prisoners detail from all over the world into a single **JSON** file which can be used as an API containing the information of all the prisoners across the world.
This JSON data can be parsed into any application to analyse the crime rate or the behaviour of the criminal and other kind of analysis. 
<hr>
<h2> How to use</h2>
To run this application, Node.js must be installed. To install Download the Node.js source code or a pre-built installer for your platform from this link: [https://nodejs.org/en/download/]<br>
Following are given command to guide you how to use this application<br><br>

* To see all the commands detail and its usage <br>

``` node w2json --help     ```         
* To add Prisoner detail<br>

``` node w2json add```
* To remove particular Prisoner detail<br>

```node w2json remove -p <prisoner-id>```
* To remove all Prisoner detail<br>

```  node w2json removeall```
* To show Prisoner detail<br>

``` node w2json show -p <prisoner-id>```
* To show all Prisoner detail<br>

```$ node w2json showall -p <prisoner-id>```
