function takeANumber(arr, name){
    arr.push(name);
    return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function currentLine(arr){
    let s = ``;
    for(let i =0; i < arr.length; i++){
        s += `${i + 1}. ${arr[i]}, `;
    }
    return "The line is currently: " + s.slice(0, -2);
}

function nowServing(arr){
    return `Currently serving ${arr[arr.length - 1]}`;
}
