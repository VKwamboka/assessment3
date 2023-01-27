"use strict";
// ANAGRAM - An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once
function checkAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid Input');
        return;
    }
    let str1 = a.toLowerCase().split('').sort().join('');
    let str2 = b.toLowerCase().split('').sort().join('');
    if (str1 === str2) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}
checkAnagram("dusty", "Study");
checkAnagram("vee", "htt");
