let memberBtn = document.getElementById("memberBtn")
let groupBtn = document.getElementById("groupBtn")
let reminderBtn = document.getElementById("reminderBtn")

memberBtn.addEventListener("click", openMember)
groupBtn.addEventListener("click", openGroup)
reminderBtn.addEventListener("click", openReminder)

let mainBodySettings = document.getElementById("mainBodySettings")

function openMember() {
    memberBtn.style.borderBottom = 1 + "px solid #C6D2D9"
    memberBtn.style.background = "#E4EAEE"
}

function openGroup() {
    mainBodySettings.innerHTML = ""

    groupBtn.style.background = "white"
    groupBtn.style.borderBottom = 0

    memberBtn.style.background = "#E4EAEE"
    memberBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    reminderBtn.style.background = "#E4EAEE"
    reminderBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBodySettings.innerHTML = `<div class="mainBodySettings" id="mainBodySettings">
                                        <div class="settingsInnerBody" style="height:200px; margin-left:10px; width:107%">
                                            <div class="innerBodyUpgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                                <p style="margin-left:-40px">If <span class="highight">Project</span> reaches 50% of estimate, alert <span  class="highight">Workspace admin</span> <button style="margin-top:15px; cursor:default; background-color:#03A9F4; width:100px; border:none; padding-top:10px; margin-left:20px">
                                                <label style="color:white; border:none; padding-top:10px">ADD</label></p>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openReminder() {
    mainBodySettings.innerHTML = ""

    groupBtn.style.background = "#E4EAEE"
    groupBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    memberBtn.style.background = "#E4EAEE"
    memberBtn.style.borderBottom = 1 + "px solid #C6D2D9"

    reminderBtn.style.background = "white"
    reminderBtn.style.borderBottom = 0

    mainBodySettings.innerHTML = `<div class="mainBodySettings" id="mainBodySettings">
                                        <div class="settingsInnerBody" style="height:200px; width:107%">
                                            <div class="innerBodyUpgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                            <div style="width:98%; height:35px; background-color:#e0e0e0; margin-top:20px; margin-left:-40px; padding-left:20px; padding-top:10px">Reminders</div>
                                            </fieldset>
                                        </div>
                                    </div>`
}