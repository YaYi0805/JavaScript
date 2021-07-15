document.getElementById("idName").onblur = checkName;
        function checkName() {
            let theNameObj = document.getElementById("idName");
            let theNameObjVal = theNameObj.value;
            let sp = document.getElementById("idsp1");
            let theNameObjValLen = theNameObjVal.length;
            let flag = false;
            if (theNameObjVal == "")
                sp.innerHTML = "<img src='Images/error.png'>  不可空白";
            else if (theNameObjValLen >= 2) {
                for (let i = 0; i < theNameObjValLen; i++) {
                    let ch = theNameObjVal.charCodeAt(i);
                    if (ch >= 0x4e00 && ch <= 0x9fff)
                        sp.innerHTML = "<img src='Images/correct.png'>  correct";
                    else
                        sp.innerHTML = "<img src='Images/error.png'>  必須全部為中文字";
                }
            } else {
                sp.innerHTML = "<img src='Images/error.png'>  至少兩個字以上";
            }
        }

        document.getElementById("idPwd").onblur = checkPwd;
        function checkPwd() {
            let thePwdObj = document.getElementById("idPwd");
            let thePwdObjVal = thePwdObj.value;
            let sp = document.getElementById("idsp2");
            let thePwdObjValLen = thePwdObjVal.length;
            let flag1 = false, flag2 = false, flag3 = false;
            re = /[!@#$%^&*]/g;
            if (thePwdObjVal == "")
                sp.innerHTML = "<img src='Images/error.png'>  不可空白";
            else if (thePwdObjValLen >= 6) {
                for (let i = 0; i < thePwdObjValLen; i++) {
                    let ch = thePwdObjVal.charAt(i).toUpperCase();
                    if (ch >= "A" && ch <= "Z")
                        flag1 = true;
                    else if (ch >= "0" && ch <= "9")
                        flag2 = true;
                    else if (re.test(ch))
                        flag3 = true;
                    if (flag1 && flag2 && flag3) break;
                }
                if (flag1 && flag2 && flag3)
                    sp.innerHTML = "<img src='Images/correct.png'>  correct";
                else if (flag1 && flag2)
                    sp.innerHTML = "<img src='Images/error.png'>  必須包含特殊字元!@#$%^&*";
                else if (flag2 && flag3)
                    sp.innerHTML = "<img src='Images/error.png'>  必須包含英文字";
                else if (flag1 && flag3)
                    sp.innerHTML = "<img src='Images/error.png'>  必須包含數字";
                else if (flag1)
                    sp.innerHTML = "<img src='Images/error.png'>  必須包含數字和特殊字元!@#$%^&*";
                else if (flag2)
                    sp.innerHTML = "<img src='Images/error.png'>  必須包含英文字和特殊字元!@#$%^&*";
                else if (flag3)
                    sp.innerHTML = "<img src='Images/error.png'>  必須包含英數字";
            } else {
                sp.innerHTML = "<img src='Images/error.png'>  至少六個字以上";
            }
        }

        document.getElementById("idDate").onblur = checkDate;
        function checkDate() {
            let theDateObj = document.getElementById("idDate");
            let theDateObjVal = theDateObj.value;
            let sp = document.getElementById("idsp3");
            let theDateObjValLen = theDateObjVal.length;
            let flag1 = false, flag2 = false, flag3 = false;
            re = /^([0-9]{4})[/]{1}([0-9]{2})[/]{1}([0-9]{2})$/g;
            if (theDateObjVal == "")
                sp.innerHTML = "<img src='Images/error.png'>  不可空白";
            else if (re.test(theDateObjVal)) {
                let dateObj = theDateObjVal.split("/");
                let year = parseInt(dateObj[0]);
                let mon = parseInt(dateObj[1]);
                let day = parseInt(dateObj[2]);
                var limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                var isLeap = new Date(year, 1, 29).getDate() === 29;
                if (isLeap) limitInMonth[1] = 29;
                if (isLeap)
                    sp.innerHTML = "<img src='Images/correct.png'>  correct";
                else if (day <= limitInMonth[mon - 1])
                    sp.innerHTML = "<img src='Images/correct.png'>  correct";
                else {
                    sp.innerHTML = "<img src='Images/error.png'>  無效日期";
                }
            } else {
                sp.innerHTML = "<img src='Images/error.png'>  請輸入正確格式 yyyy/mm/dd";
            }
        }