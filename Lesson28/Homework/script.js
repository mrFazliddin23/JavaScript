/*task_1        BMI = (weight/height)**2  */

const BobWeight = +prompt("Bob bro, how much do you weight?");
const BobHeight = +prompt("Bob bro, Also enter your height?");
const JohnWeight = +prompt("Eyy John how much do you weight?");
const JohnHeight = +prompt("John enter you height?");
const BobBmi = (BobWeight / BobHeight) ** 2;
const JohnBmi = (JohnWeight / JohnHeight) ** 2;
if (BobBmi > JohnBmi) {
    console.log(`Bob bro, your BMI ${BobBmi}`);
} else if (JohnBmi > BobBmi) {
    console.log(`John you BMI ${JohnBmi}`);
} else {
    console.log("Akalar sizlarnini BMIlaringiz teng");
}

/* Task_2 */
const yourAge = Number(prompt("Enter your age"));
if (yourAge <= 18) {
    console.log("Uka siz hali yoshsz o'qing, rossiyada nima qilasz");
} else if (yourAge >= 18 && yourAge < 60) {
    console.log("Uka yoshiz kattarib qoldi soqqani bosing Rossiyaga gooo")
} else if (yourAge >= 60) {
    console.log("Amaki pensiya yoshida bo'sez yotmiszmi uyda. Pensiyadan nevaralarga ham berib turing")
}