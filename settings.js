let settingsBtn = document.getElementById("settingsBtn")
let alertBtn = document.getElementById("alertBtn")
let accountBtn = document.getElementById("accountBtn")
let authBtn = document.getElementById("authBtn")
let customBtn = document.getElementById("customBtn")
let importBtn = document.getElementById("importBtn")

settingsBtn.addEventListener("click", openSettings)
alertBtn.addEventListener("click", openAlert)
accountBtn.addEventListener("click", openAccount)
authBtn.addEventListener("click", openAuth)
customBtn.addEventListener("click", openCustom)
importBtn.addEventListener("click", openImport)

let mainBodySettings = document.getElementById("mainBodySettings")


function openSettings() {
    settingsBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    settingsBtn.style.background = "#E4EAEE"
}

function openAlert() {
    mainBodySettings.innerHTML = ""
    alertBtn.style.background = "white"
    alertBtn.style.borderBottom = 0
    settingsBtn.style.background = "#E4EAEE"
    settingsBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    accountBtn.style.background = "#E4EAEE"
    accountBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    authBtn.style.background = "#E4EAEE"
    authBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    customBtn.style.background = "#E4EAEE"
    customBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    importBtn.style.background = "#E4EAEE"
    importBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBodySettings.innerHTML = `<div id="mainBodySettings" style="margin-top:0">
                                        <div class="settingsInnerBody" style="height:200px">
                                            <div class="innerBodyUpgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                                <p style="margin-left:-40px">If <span class="highight">Project</span> reaches 50% of estimate, alert <span  class="highight">Workspace admin</span> <button class="innerBodyUploadFile" style="margin-top:15px; cursor:default">
                                                <label style="padding-left:40px">ADD</label></p>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openAccount() {
    alertBtn.style.background = "#E4EAEE"
    alertBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    mainBodySettings.innerHTML = ""
    accountBtn.style.background = "white"
    accountBtn.style.borderBottom = 0
    authBtn.style.background = "#E4EAEE"
    authBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    customBtn.style.background = "#E4EAEE"
    customBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    importBtn.style.background = "#E4EAEE"
    importBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBodySettings.innerHTML = `<div id="mainBodySettings" style="margin-top:0">
                                        <div class="settingsInnerBody" style="height:200px">
                                            <div class="innerBodyUpgrade">
                                                <p>ENTERPRISE feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="font-size:14px">
                                                <input type="text" value="Search by email" style="margin-left:-10px; margin-top:15px; height:35px; width:200px"></input>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openAuth() {
    alertBtn.style.background = "#E4EAEE"
    alertBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    accountBtn.style.background = "#E4EAEE"
    accountBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    authBtn.style.background = "white"
    authBtn.style.borderBottom = 0
    customBtn.style.background = "#E4EAEE"
    customBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    mainBodySettings.innerHTML = ""
    importBtn.style.background = "#E4EAEE"
    importBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBodySettings.innerHTML = `<div id="mainBodySettings" style="margin-top:0px;">
                                        <div class="settingsInnerBody" style="height:500px; margin-bottom:50px;">
                                            <div class="innerBodyUpgrade">
                                                <p>ENTERPRISE feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="font-size:14px">
                                            <p class="innerBodyHeading">Regular users can see</p>
                                            <p class="innerBodyDesc">Prevent regular users from seeing other people’s time entries.</p>
                                            <div class="newProjectsRadio"><input type="radio"  checked="checked" style="cursor:default"><label style="cursor:default"> All tracked time</label> <input type="radio" style="cursor:default"><label style="cursor:default"> Only time on public projects</label> <input type="radio" style="cursor:default"><label style="cursor:default"> Only their own time</label></div>
                                            <hr>
                                            <p class="innerBodyHeading">Group projects by</p>
                                            <p class="innerBodyDesc">If you don’t have clients or departments, you can change the label to something else.</p>
                                            <select name="options" class="groupProjectsOptions">
                                                <option value="client">Client</option>
                                                <option value="department">Departments</option>
                                                <option value="ategory">Category</option>
                                                <option value="Custom...">Custom</option>
                                            </select>
                                            <hr>
                                            <p class="innerBodyHeading">Project favorites</p>
                                            <p class="innerBodyDesc">Let people mark their most used projects as favorite so they appear at the top of their project list when tracking time.</p>
                                            <label class="switch">
                                                <input type="checkbox" checked style="cursor:default">
                                                <span class="slider round" style="cursor:default"></span>
                                            </label>
                                            <label class="activate">Activate project favorites</label>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openCustom() {
    alertBtn.style.background = "#E4EAEE"
    alertBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    accountBtn.style.background = "#E4EAEE"
    accountBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    authBtn.style.background = "#E4EAEE"
    authBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    customBtn.style.background = "white"
    customBtn.style.borderBottom = 0
    mainBodySettings.innerHTML = ""
    importBtn.style.background = "#E4EAEE"
    importBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBodySettings.innerHTML = `<div id="mainBodySettings" style="margin-top:0px">
                                        <div class="settingsInnerBody" style="height:400px;">
                                            <div class="innerBodyUpgrade">
                                                <p>ENTERPRISE feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="font-size:14px">
                                                <p class="innerBodyHeading">Duration format</p>
                                                <p class="innerBodyDesc">Display time in clock format (with or without seconds).</p>
                                                <select name="options" class="groupProjectsOptions">
                                                <option value="client">Full (hh:mm:ss)</option>
                                                <option value="department">Comapct (h:mm)</option>
                                              </select>
                                              <hr>
                                              <p class="innerBodyHeading">Task filter</p>
                                                <p class="innerBodyDesc">Quickly find the right task in project picker by using the task@project syntax.</p>
                                                <label class="switch" style="cursor:default">
                                                    <input type="checkbox" style="cursor:default">
                                                    <span class="slider round" style="cursor:default"></span>
                                                </label>
                                                <label class="activate">Activate task filter</label>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openImport() {
    alertBtn.style.background = "#E4EAEE"
    alertBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    accountBtn.style.background = "#E4EAEE"
    accountBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    authBtn.style.background = "#E4EAEE"
    authBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    customBtn.style.background = "#E4EAEE"
    customBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    mainBodySettings.innerHTML = ""
    importBtn.style.background = "white"
    importBtn.style.borderBottom = 0
    // settings.style.background = "white"
    mainBodySettings.innerHTML = `<div id="mainBodySettings" style="margin-top:0">
                                        <div class="settingsInnerBody" style="height:200px">
                                            <div class="innerBodyUpgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                                <p style="margin-left:-40px">If <span class="highight">Project</span> reaches 50% of estimate, alert <span  class="highight">Workspace admin</span> <button class="innerBodyUploadFile" style="margin-top:15px; cursor:default"">
                                                <label style="padding-left:40px">ADD</label></p>
                                            </fieldset>
                                        </div>
                                    </div>`
}


let uploadFileBtn = document.getElementById("uploadFile")
// uploadFileBtn.addEventListener("click", uploadImage)

var loadFile = function(event) {
	var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);

    image.style.width = 100+"px"
    image.style.height = 100+"px"
    image.style.borderRadius = 50+"%"
};
