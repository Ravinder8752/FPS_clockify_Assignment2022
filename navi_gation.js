var flag = 0;
const sidebar = document.getElementById("productContainerSidebar")
const analyze = document.getElementById("productAnalyze")
const manage = document.getElementById("productManage")
const container = document.getElementById("productContainerContent")

const sidebarFeature = () =>{
    if(flag === 0){
        sidebar.style.width = "2.8%"
        sidebar.style.minWidth = "0"
        sidebar.style.minWidth = "52px"
        analyze.style.display = "none"
        manage.style.display = "none"
        container.style.width = "97.2%"

        flag=1;
    }
    else{
        document.getElementById("productContainerSidebar").style.width = "10%"
        sidebar.style.minWidth = "200px"
        console.log("1")
        flag=0;
        analyze.style.display = "inline"
        manage.style.display = "inline"
        container.style.width = "90%"

    }

}


function Display_User_Name(){
    var email = localStorage.getItem("email")
    var password= localStorage.getItem("password")
    var workName = document.getElementById("workspacePassword")
    var workPassword= document.getElementById("workspaceEmail")
    workName.innerHTML = "User Workspace : " +  email
    workPassword.innerHTML = "User Email : " + email
    var profileName = document.getElementById("profilePassword")
    var profilePassword= document.getElementById("profileEmail")
    profileName.innerHTML ="User Workspace : " +  email
    profilePassword = "User Email : " + email
    console.log( email, password)
  }
  window.onload=DisplayUserName();