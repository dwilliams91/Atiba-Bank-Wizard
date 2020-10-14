Description:
This is a demo app to help people change reoccuring charges when they switch banks. It consists of four pages. The first page is the login for your new bank. The second page would be the login for your new bank. The third page gives a readout of your charges and looks for items that repeat and therefore might be reoccuring charges. It then asks you to check which ones are actually reoccuring charges. Lastly, it leads you to a page with instructions on how to change those accounts to your new bank. 

WARNING:
This is a purely visual demo with no actual functionality made an intern before he started coding school. 

Instructions:
1)Go to http://localhost:5000/pages/firstLogin
2)Click submit
3)Click submit
4)Click check for reoccurning charges. 
5) 3 times will pop up. Postmates, NES, and comcast. The hypothetical user just happened to eat postmates twice that month and it is not a reoccuring charge. click the check boxes for NES and Comcast

Changes needed now that I've been through two weeks of software school:
1) Separate the java into modules with data providers.
2) Either use an API to connect to a real bank. OR at least switch the dates in the data so they are actual dates. 
2) make the searchDataBase function check to see which payments are about a month apart, instead of just the same name. 
