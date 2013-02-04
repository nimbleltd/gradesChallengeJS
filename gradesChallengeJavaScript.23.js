function randomFromTo(from, to){
       return Math.floor(Math.random() * (to - from + 1) + from);
    }

var studentData = [
        ["Napoleon", randomFromTo(50,100), "http://cache.gawker.com/assets/images/8/2009/10/napoleon-dynamite-400a111306.jpg", "http://1.bp.blogspot.com/-MmeETSuPJBI/TqYYALSuGWI/AAAAAAAABL0/5d8k1-ZEinE/s1600/Napoleon-Dynamite-napoleon-dynamite-117756_1024_768.jpg width=\"400\" height=\"340\""],
        ["Tina", randomFromTo(50,100), "http://4.bp.blogspot.com/_znBKdiusdyY/Sfp1oO1f9uI/AAAAAAAAEwg/IHHxB1GkVF0/s400/Tina+Fat+Lard.jpg", "http://entertainmentguide.local.com/DM-Resize/photos.demandstudios.com/getty/article/41/232/89695055.jpg?w=600&h=600&keep_ratio=1   width=\"400\" height=\"280\""],
        ["Kip", randomFromTo(50,100), "http://i.ebayimg.com/00/s/MTA2MFgxMzI1/$T2eC16FHJGYE9nooiJw6BQCSQSm,)Q~~60_3.JPG width=\"400\" height=\"310\"", "http://i1.ytimg.com/vi/L3LHAlcrTRA/mqdefault.jpg"],
        ["Uncle Rico", randomFromTo(50,100), "http://www.rankopedia.com/CandidatePix/135086.gif", "http://cf.drafthouse.com/_uploads/galleries/25024/napoleon-d-3.jpg width=\"400\" height=\"220\""],
        ["Pedro", randomFromTo(50,100), "http://24.media.tumblr.com/tumblr_lztgryDM6c1qaxrj4o1_500.jpg  width=\"400\" height=\"280\"", "http://snakkle.wpengine.netdna-cdn.com/wp-content/uploads/2012/01/efren-ramirez-napoleon-dynamite-movie-photo-GC.jpg"],
        ["Summer", randomFromTo(50,100), "http://www.rankopedia.com/CandidatePix/135093.gif  width=\"400\" height=\"320\"", "http://snakkle.wpengine.netdna-cdn.com/wp-content/uploads/2012/01/haylie-duff-napoleon-dynamite-movie-photo-GC.jpg"],
        ["Lafawnduh", randomFromTo(50,100), "http://debitversuscredit.com/wp-content/uploads/2011/09/lafawnduh-park.jpg", "http://www.dvdbeaver.com/film2/DVDReviews44/napoleon%20dynamite%20blu-ray/menu%20napoleon%20dynamite%20blu-raybonus11.jpg"],
        ["Deb", randomFromTo(50,100), "http://images1.fanpop.com/images/photos/1600000/Napoleon-Dynamite-tina-majorino-1676033-700-377.jpg width=\"400\" height=\"240\"", "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=19478187"],
        ["Grandma", randomFromTo(50,100), "http://media.tumblr.com/tumblr_lzgxxzgDzs1r2piwc.png", "http://www.sandymartin.com/images/archive/napoleon.png"],
        ["Don", randomFromTo(50,100), "http://media.tumblr.com/tumblr_lygcl776cm1qag5hk.gif", "http://images2.wikia.nocookie.net/__cb20120210043317/napoleondynamite/images/8/81/Don_Moser_01.jpg"]
    ];

function averageGrade() {
    var gradeSum = 0;
    for (var i = 0; i < studentData.length; i++) {
        gradeSum += studentData[i][1];
    }
    var average = gradeSum / studentData.length;
    return average;
}

document.write("Average grade: " + averageGrade() + "%<br>");

function letterGrade(gradeNum) {

    if (gradeNum < 60) {
        return "F";
    }
    else if (gradeNum < 70) {
        return "D";
    }
    else if (gradeNum < 80) {
        return "C";
    }
    else if (gradeNum < 90) {
        return "B";
    }
    else {
        return "A";
    }
}
document.write("The average letter grade: " + letterGrade(averageGrade()) + "<br><br>");
//letterGrade(averageGrade());

//return who scored the highest and what score
function whoHasTheHighestGrade(){
    var score = 0;
    var highestStudent = "nobody";
    var highestStudentPic = "no Pic";
    for (var i = 0; i < studentData.length; i++) {
        if (studentData[i][1]> score){
            score = studentData[i][1];
            highestStudent = studentData[i][0];
            highestStudentPic = studentData[i][2];
        }
        else {
            score = score;
        }
    }
    return [score, highestStudent, highestStudentPic];
}

var highestInfoArray = whoHasTheHighestGrade();
document.write("The highest score of " + highestInfoArray[0] + "%<br>");

document.write("Scored by student " + highestInfoArray[1] + ", a GENIUS. <br>");

document.write("<img src=" + highestInfoArray[2] + ">");

//return who scored the lowest and what score
function whoHasTheLowestGrade(){
    var score = 100;
    var lowestStudent = "nobody";
    var lowestStudentPic = "no Pic";
    for (var i = 0; i < studentData.length; i++) {
        if (studentData[i][1]< score){
            score = studentData[i][1];
            lowestStudent = studentData[i][0];
            lowestStudentPic = studentData[i][3];
        }
        else {
            score = score;
        }
    }
    return [score, lowestStudent, lowestStudentPic];
}

var lowestInfoArray = whoHasTheLowestGrade();
document.write("<br><br> The lowest score of " + lowestInfoArray[0] + "%<br>");

document.write("Scored by student " + lowestInfoArray[1] + ", a DUMBASS.<br>");

document.write("<img src="  + lowestInfoArray[2] +">");