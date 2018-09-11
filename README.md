# nodejs-cli-app
It is a w2json(Write to JSON file) CLI appliation using nodejs.<br>
It can be used to **add,remove and view** the prisoners detail from all over the world into a single **JSON** file which can be used as an API containing the information of all the prisoners across the world.
This JSON data can be parsed into any application to analyse the crime rate or the behaviour of the criminal and other kind of analysis. 
<hr>
<h2> How to use</h2>

* To see all the command avaiable <br>
> $ node w2json --help              
* To add Prisoner detail<br>
> $ node w2json add
* To remove particular Prisoner detail<br>
> $ node w2json remove -p <prisoner-id>
* To remove all Prisoner detail<br>
> $ node w2json removeall
* To show Prisoner detail<br>
> $ node w2json show -p <prisoner-id>
* To show all Prisoner detail<br>
> $ node w2json showall -p <prisoner-id>
