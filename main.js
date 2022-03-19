const loginLink = "https://leetcode.com/accounts/login/";
const puppeteer = require("puppeteer");
const codeFile = require("./code");
let email = "21585sahil@gmail.com";
let password = "Sahil@10121999";
let page;
let browserWilllaunchPromise = puppeteer.launch({
  headless: false, //to see changeses with our eye
  args: ["--start-maximized"], //open in full screen
  defaultViewport: null,
}); //lounch return a promise to open Browser

browserWilllaunchPromise
  .then(function (browserInstance) {
    //   console.log("browser Opened");
    let newTabPromise = browserInstance.newPage();
    //new Page method will open a new tab in the browser
    return newTabPromise;
  })
  .then(function (newTab) {
    page = newTab;
    let websiteWillbeOpenedPromise = newTab.goto(loginLink);
    return websiteWillbeOpenedPromise;
  })
  .then(function () {
    let emailWillBeEnteredPromise = page.type("#id_login", email, {
      delay: 100,
    });
    return emailWillBeEnteredPromise;
  })
  .then(function () {
    let passwordWillBeEnteredPromise = page.type("#id_password", password, {
      delay: 100,
    });
    return passwordWillBeEnteredPromise;
  })
  .then(function () {
    let loginButtonClickPromise = page.click("#signin_btn", { delay: 50 });
    return loginButtonClickPromise;
  })
  //   .then(function () {
  //     let allProblemButton = page.click(
  //       'a[href="/problemset/all/"]',
  //       { delay: 50 }
  //     );
  //     return allProblemButton;
  //   })
  .then(function () {
    let allProblemButton = waitAndClick('a[href="/problemset/all/', page);
    return allProblemButton;
  })
  .then(function () {
    let allQuestionsArr = page.$$(".flex.items-center .truncate.overflow-hidden");
    return allQuestionsArr;
  })
  .then(function (totalQuestions) {
    console.log("<Number of Questions->" + totalQuestions.length);
    for(let i=0;i<totalQuestions.length;i++){
        console.log(totalQuestions[i])
    }
    // let questionWillBeSolved = questionSolver(
    //   page,
    //   totalQuestions[1],
    //   codeFile.answers[0]
    // );

    // return questionWillBeSolved;
  });

//main page ke liye wait kre ge aur then click kre ge on selected attribute
//using this fumction we provide the wait
function waitAndClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModalPromise = cPage.waitForSelector(selector);
    waitForModalPromise
      .then(function () {
        let clickModal = cPage.click(selector, { delay: 100 });
        return clickModal;
      })
      .then(function () {
        resolve();
      })
      .catch(function () {
        reject();
      });
  });
}

//question solver

// function questionSolver(page, question, answer) {
//   return new Promise(function (resolve, reject) {
//     let questionWillBeClickedPromise = question.click();
//     questionWillBeClickedPromise
//       .then(function () {
//         //getting new page for selection
//         let waitForEditor = waitAndClick(
//           ".CodeMirror-scroll .CodeMirror-lines .CodeMirror-code .CodeMirror-activeline",
//           page
//         );
//         return waitForEditor;
//       })
//       .then(function () {
//         // console.log("question is clicked")
//         let customInputClicked = waitAndClick(
//           "button[class='custom-testcase__2ah7']",
//           page
//         );
//         return customInputClicked;
//       })
//       .then(function () {
//         // console.log("test against the custom input is clicked");
//         return waitAndClick("div[class='ace_content']", page);
//       })
//       .then(function () {
//         return page.type("div[class='ace_content']", answer, {
//           delay: 20,
//         });
//       })
//       .then(function () {
//         // console.log("answer is typed");
//         //pressing ctrl in input filed of custom input
//         let ctrIsPressedPromise = page.keyboard.down("Control");
//         return ctrIsPressedPromise;
//       })
//       .then(function () {
//         //ctrl+A is pressed
//         let AisPressedPromise = page.keyboard.press("A", { delay: 100 });
//         return AisPressedPromise;
//       })
//       .then(function () {
//         //ctrl+x is pressed
//         let XisPressedPromise = page.keyboard.press("X", { delay: 100 });
//         return XisPressedPromise;
//       })
//       .then(function () {
//         //Releasing the ctrl in input filed of custom input
//         let ctrIsReleasedPromise = page.keyboard.down("Control");
//         return ctrIsReleasedPromise;
//       })
//       .then(function () {
//         // console.log("content is copied")
//         let waitForCodeAreaPromise = waitAndClick(
//           ".CodeMirror-scroll .CodeMirror-lines .CodeMirror-code .CodeMirror-activeline",
//           page
//         );
//         return waitForCodeAreaPromise;
//       })
//       .then(function () {
//         // console.log("answer is typed");
//         //pressing ctrl in input filed of custom input
//         let ctrIsPressedPromise = page.keyboard.down("Control");
//         return ctrIsPressedPromise;
//       })
//       .then(function () {
//         //ctrl+A is pressed
//         let AisPressedPromise = page.keyboard.press("A", { delay: 100 });
//         return AisPressedPromise;
//       })
//       .then(function () {
//         //ctrl+v is pressed
//         let VisPressedPromise = page.keyboard.press("V", { delay: 100 });
//         return VisPressedPromise;
//       })
//       .then(function () {
//         //Releasing the ctrl in input filed of custom input
//         let ctrIsReleasedPromise = page.keyboard.down("Control");
//         return ctrIsReleasedPromise;
//       })
//       .then(function () {
//         let runButtonClicked = page.click(
//           ".runcode__1EDI.css-79pre8 .css-1km43m6-BtnContent.e5i1odf0",
//           {
//             delay: 50,
//           }
//         );
//         return runButtonClicked;
//       })
//       .then(function () {
//         let submitButtonClicked = page.click(".submit__2ISl.css-ieo3pr", {
//           delay: 50,
//         });
//         return submitButtonClicked;
//       })
//       .then(function () {
//         resolve();
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   });
// }
