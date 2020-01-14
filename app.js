var name = "NAME: keishaun wesley";
var careerfield = "Career field: Software Delevopment";
var dscr ="Description of self: Hello my name is "+ name + " and i am a self taught coder and i have been studying for two years. I like to learn new things and work hard to finish my work. I love anime and my favorite anime is One Piece. I have a son on the way and im very excited."
var interests = ["Interests:", "*My interests would include playing video games."," *Watching anime with my friends", "*and thinking of ways to better myself."]
var workhistoryname = ["Work History:Olive garden", "Work History:Dave and busters"]
var workhistorytitle = "Server"
var workhistoryinfo = ["As a server at "+ workhistoryname[0]+" i had to be sure that i gave excellent service.Knowing the menu so i can explained things to customers so they can enjoy their time with us. Putting food in via a POS system and money handling.","At "+ workhistoryname[1]+ " giving people the time of there life was my job. Checking on food and ensuring that the guest are smiling was big on the company and for me. "]
var skills = ["Skills","*Can code CSS HTML and JS", "*Customer service professional of 5 years" , "*Also hard working and highly passionate about coding in general."]
var name = name.toUpperCase()
var coolskills=["Cool skills","*BAM:Can code CSS HTML and JS","*BAM:I have knowledge of word, powerpoint and other office sowftware.", "*BAM: Can spit fire when drinking milk"]


console.log(name)
console.log(careerfield)

for(var i = 0;i < interests.length;i++){
    console.log(interests[i])
}



function displaypositon(companyName,jobtitle,workexplained){
console.log(companyName)
console.log(jobtitle)
console.log(workexplained)
}


displaypositon(workhistoryname[0], workhistorytitle ,workhistoryinfo[0])
displaypositon(workhistoryname[1], workhistorytitle ,workhistoryinfo[1])

//for(var i = 0;i < skills.length;i++){
//console.log(skills[i])

//}

function displayskill(skill,boolean){
//console.log(skill[i])
//console.log(boolean)
for(var i = 0;i < skill.length;i++){
    console.log(skill[i])}


    for(var i = 0;i < boolean.length;i++){
        //console.log(skill[i])}
        console.log(boolean[i])
    
    
    }


}
displayskill(skills,coolskills);