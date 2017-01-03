# README

## Run tests
1. `cd /path/to/root/of/project`
2. `npm install`
3. `karma start`

## Dependencies
- `npm`
- Jasmine
- karma

## Installation steps for intellij
1. use _static web_ project setup
2. In a CLI, run `npm install` from the project root to get the **node_modules** project dependencies specified in the package.json
3. In configuration, set run configuration to `/path/to/project/node_modules/karma`

## Setup karma server
1. In a CLI, run `karma start` to activate karma server

## References
- jasmine karma docs
- javascript docs (Mozilla Developer Network)
- IDEA WebStorm docs
- w3schools

### Requirement 5 ###

- Extend all String objects with the following methods:

>> _startsWith(string)_  : This should take a single argument and return true if the provided string is a prefix of  this.

this		      |	Sample Inputs	   	  	   | Sample Outputs
-------------:	      |	--------------:	 	    	   | --------------:
“hang the dj”	      |	"hang"		 	    	   | true
“hang the dj”	      |	"Hang"			    	   | false
“hang the dj”	      |	"I've got a room for rent"  	   | false
“hang the dj”	      |	""		     	    	   | true
“hang the dj”	      |	"hang the"		 	   | true
“hang the dj”	      |	"han"		 		   | true
“hang the dj”	      |	"hang t"		 	   | true
“hang the dj”	      |	42		 		   | false
“hang the dj”	      |	{first: "Johnny"}		   | false



>> _endsWith(string)_  : This should take a single argument and return true if the provided string is a suffix of  this .


this                  |	Sample Inputs                      | Sample Outputs
-------------:        | --------------:	                   | --------------:
“hang the dj”         | "dj"                               | true
“hang the dj”         | "panic on the streets"             | false
“hang the dj”         | ""     	               		   | true
“hang the dj”         | "the dj"                           | true
“hang the dj”         | "e dj"                         	   | true
“hang the dj”         | "j"                                | true
“hang the dj”         | 42                                 | false
“hang the dj”         | {first: "Johnny"}                  | false


### Requirement 6 ###

- Extend all String objects with the following methods:

>> _stripHtml()_  : This method should remove all html/xml tags from  this .

this                  	     	    | Sample Outputs
-------------:        		    | --------------:
“<p>Shoplifters of the World        | “Shoplifters of the World Unite!”
<em>Unite</em>!</p>”   		    |
				    |
“1 &lt; 2””         		    | “1 &lt; 2”
