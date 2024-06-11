nave = new Image();
nave.src = "Aeronave.png";
nave.onload = function() {
    xNave = canvas.width / 2 - nave.width / 2;
    yNave = canvas.height - nave.height;
    ctx.drawImage(nave, xNave, yNave);
    atualizarCanvas();
}

var tiros = [];
var maxTiros = 50;

for (var i = 0; i < maxTiros; i++) {
    tiros[i] = null;
}

function criarTiro() {
    for (var i = 0; i < maxTiros; i++) {
        if (tiros[i] === null) {
            tiros[i] = {
                x: xNave + nave.width / 2 - 2.5,
                y: yNave,
                largura: 5,
                altura: 20,
                velocidade: 10
            };
            break;
        }
    }
}

function desenharTiros() {
    ctx.fillStyle = 'red';
    for (var i = 0; i < maxTiros; i++) {
        if (tiros[i] !== null) {
            var tiro = tiros[i];
            ctx.fillRect(tiro.x, tiro.y, tiro.largura, tiro.altura);
            tiro.y -= tiro.velocidade;
            if (tiro.y + tiro.altura < 0) {
                tiros[i] = null;
            }
        }
    }
}

function movimentaNaveInimigo(tecla) {
    if (tecla == "x") {
        xNave -= 50;
        xNave = Math.max(0, xNave);
    } else if (tecla == "v") {
        xNave += 50;
        xNave = Math.min(canvas.width - nave.width, xNave);
    } else if (tecla == " ") {
        criarTiro();
    }
}


function atualizarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(nave, xNave, yNave);
    desenharTiros();
    requestAnimationFrame(atualizarCanvas);
}

