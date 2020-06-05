# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model View Controller (MVC is what developers need to create a successful website)

  Researched answer: 1. The browser (on the client) sends a request for a page to the controller on the server.
2. The controller retrieves the data it needs from the model in order to respond to the request.
3. The controller gives the retrieved data to the view.
4. The view is rendered and sent back to the client for the browser to display.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: Create Read Update Delete. CRUD is developer's promise(?) to users to do perform CRUD actions.

  Researched answer: CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.



3. What is a migration? Why would you use one?

  Your answer: changes to the shape of table (changes database schemas)

  Researched answer: In software engineering, schema migration (also database migration, database change management) refers to the management of incremental, reversible changes and version control to relational database schemas. A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version.

Migrations are performed programmatically by using a schema migration tool. When invoked with a specified desired schema version, the tool automates the successive application or reversal of an appropriate sequence of schema changes until it is brought to the desired state.

Most schema migration tools aim to minimize the impact of schema changes on any existing data in the database. Despite this, preservation of data in general is not guaranteed because schema changes such as the deletion of a database column can destroy data (i.e. all values stored under that column for all rows in that table are deleted). Instead, the tools help to preserve the meaning of the data or to reorganize existing data to meet new requirements. Since meaning of the data often cannot be encoded, the configuration of the tools usually needs manual intervention.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: Computer belongs_to Person? Therefore, computer has the foreign key pointing to the person.

  Researched answer: A foreign key is a set of attributes that references a candidate key. For example, a table called TEAM may have an attribute, MEMBER_NAME, which is a foreign key referencing a candidate key, PERSON_NAME, in the PERSON table. Since MEMBER_NAME is a foreign key, any value existing as the name of a member in TEAM must also exist as a person's name in the PERSON table; in other words, every member of a TEAM is also a PERSON.



5. What is object-relational mapping?

  Your answer: translate Ruby and database language (sql)

  Researched answer: Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. There are both free and commercial packages available that perform object-relational mapping, although some programmers opt to construct their own ORM tools.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.
- JSON: JSON: JavaScript Object Notation.JSON is a syntax for storing and exchanging data.JSON is text, written with JavaScript object notation.
- Endpoints: Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.

APIs work using ‘requests’ and ‘responses.’ When an API requests information from a web application or web server, it will receive a response. The place that APIs send requests and where the resource lives, is called an endpoint.
- Strong params: It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.
