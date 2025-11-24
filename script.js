// ===== CURIOSIDADES (Página inicial) =====
const curiosidades = [
    "A virtualização nasceu nos anos 1960, com os mainframes da IBM.",
    "Com a virtualização, um único servidor físico pode hospedar dezenas de máquinas virtuais.",
    "Docker e Kubernetes são tecnologias baseadas em conceitos de virtualização.",
    "A virtualização é a base da computação em nuvem moderna.",
    "O hiper/visor é o 'cérebro' que gerencia todas as máquinas virtuais."
];

const btnCuriosidade = document.getElementById("btnCuriosidade");
const textoCuriosidade = document.getElementById("curiosidade");

if (btnCuriosidade && textoCuriosidade) {
    btnCuriosidade.addEventListener("click", () => {
        const curiosidade = curiosidades[Math.floor(Math.random() * curiosidades.length)];

        // Efeito visual: fade
        textoCuriosidade.style.opacity = 0;

        setTimeout(() => {
            textoCuriosidade.textContent = curiosidade;
            textoCuriosidade.style.opacity = 1;
        }, 400);

        // Efeito no botão
        btnCuriosidade.classList.add("ativo");
        setTimeout(() => btnCuriosidade.classList.remove("ativo"), 300);
    });
}

// ===== QUIZ (Página de perguntas) =====
const btnVerificar = document.getElementById("btnVerificar");

if (btnVerificar) {
    btnVerificar.addEventListener("click", () => {
        const perguntas = document.querySelectorAll(".question");
        let acertos = 0;

        perguntas.forEach((pergunta) => {
            const opcoes = pergunta.querySelectorAll("input[type='radio']");
            let respondida = false;

            opcoes.forEach((opcao) => {
                const label = opcao.parentElement;

                // Limpa estilos anteriores
                label.style.background = "#9fa0a4ff";

                if (opcao.checked) {
                    respondida = true;
                    if (opcao.value === "certo") {
                        label.style.background = "#7ffb96ff"; // verde
                        acertos++;
                    } else {
                        label.style.background = "#f77d7dff"; // vermelho
                    }
                }
            });

            // Se a pergunta não foi respondida, destaque
            if (!respondida) {
                pergunta.style.border = "2px solid #facc15";
            } else {
                pergunta.style.border = "none";
            }
        });

        const total = perguntas.length;
        const resultado = document.getElementById("resultado");

        resultado.textContent = `🎯 Você acertou ${acertos} de ${total} perguntas!`;
        resultado.style.color = acertos === total ? "#22c55e" : "#fbbf24";

        // Bloqueia o botão após a verificação
        btnVerificar.disabled = true;
        btnVerificar.style.opacity = "0.6";
        btnVerificar.textContent = "Verificação concluída ✅";
    });
}

