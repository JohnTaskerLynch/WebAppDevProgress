function InvertString() {
    // Input Code
    var subject = document.getElementById("input").elements[0].value;

    // Process
    var subjectSplit = subject.split("");
    var subjectSplitReverse = subjectSplit.reverse();
    var subjectReverse = subjectSplitReverse.join("");

    // Output Code
    document.getElementById("output").innerHTML = subjectReverse;
}




