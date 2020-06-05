# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new file-name -d postgresql -T
rails db:create




2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb we are sending to the server via the url
library - url/path
:id - parameters (probably id of the book that you would like to see?)
book - name of controller 
show - name of method found in controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

The foreign key always goes on the belongs_to side. By the convention, the foregin key should always be the modelname_id and the data type should be integer. Book hold the foreign key to the authorFor example, if we are to create a foreign key betwen the Author and books, it will be an Author has_many books
vise versa books belongs_to an Author. 
Then, you may give a new variable to add entry of books into the one author. 


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string





5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

naming convention for generating a Rails model is singular word and starts with a capital letter. ex) Person

naming convention for the table that is generated would be a plural and all lower case. ex) people
