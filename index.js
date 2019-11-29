function takeANumber(arr, name){
    arr.push(name);
    return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function currentLine(arr){
    let s = ``;
    if(arr.length) {
        for (let i = 0; i < arr.length; i++) {
            s += `${i + 1}. ${arr[i]}, `;
        }
    }
    else{
        return "The line is currently empty.";
    }
    return "The line is currently: " + s.slice(0, -2);
}

function nowServing(arr){
    return `Currently serving ${arr.shift()}.`;
}
