var name = "keishaun wesley";
var careerfield = "software delevopment";
var dscr ="Hello my name is "+ name + " and i am a self taught coder and i have been studying for two years. I like to learn new things and work hard to finish my work. I love anime and my favorite anime is One Piece. I have a son on the way and im very excited."
var interests = "My interests would include playing video games. Watching anime with my friends and thinking of ways to better myself."
var workhistoryname = ["Olive garden", "Dave and busters"]
var workhistorytitle = "Server"
var workhistoryinfo = ["As a server at "+ workhistoryname[0]+" i had to be sure that i gave excellent service.Knowing the menu so i can explained things to customers so they can enjoy their time with us. Putting food in via a POS system and money handling.","At "+ workhistoryname[1]+ " giving people the time of there life was my job. Checking on food and ensuring that the guest are smiling was big on the company and for me. "]
var skills = ["*Can code CSS HTML and JS", "*BAM:I have knowledge of word pointpower and other office sowftware.", "Customer service professional of 5 years" , "also hard working and highly passionate about coding in general.", "*BAM: Can spit fire when drinking milk"]
var name = name.toUpperCase()
//

function displaypositon(companyName,jobtitle,workexplained){
console.log(companyName)
console.log(jobtitle)
console.log(workexplained)
}

displaypositon(workhistoryname[0], workhistorytitle ,workhistoryinfo[0])
displaypositon(workhistoryname[1], workhistorytitle ,workhistoryinfo[1])