const [nd, sc, c1] = process.argv;

var esp, hash, esc;

function escalier(x)
{
for(var i = 1; i<=x && typeof i === "number"; i++)
    {
    esp = x - i;
        hash = i;
        esc = " ".repeat(esp) + "#".repeat(hash);
        console.log(esc);
    }
}

escalier(c1);
