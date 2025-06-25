let chloeCount = 0;

function changeText()
{
    ++chloeCount;
    document.getElementById("dynamic-text").innerHTML =
        `Chris has mentioned Chloe <strong>${chloeCount}</strong> time${chloeCount !== 1 ? 's' : ''}!`;
}

function resetCount()
{
    chloeCount = 0;
    document.getElementById("dynamic-text").innerHTML =
        `Chris has mentioned Chloe <strong>0</strong> times.`;
}