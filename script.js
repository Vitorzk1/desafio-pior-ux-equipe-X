const startBtn = document.getElementById("startBtn");
const helpBtn = document.getElementById("helpBtn");
const indexMessage = document.getElementById("indexMessage");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    indexMessage.textContent = "Ótimo! Você escolheu cancelar. Redirecionando para o cadastro...";
    setTimeout(() => {
      window.location.href = "cadastro.html";
    }, 700);
  });
}

if (helpBtn) {
  helpBtn.addEventListener("click", () => {
    alert("Dica: o botão verde provavelmente não é o que parece.");
  });
}

const form = document.getElementById("cadastroForm");

if (form) {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const cor = document.getElementById("cor");
  const termos = document.getElementById("termos");
  const error = document.getElementById("error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValido = email.value.includes("@");
    const senhaValida = senha.value.length === 8;

    if (!nome.value.trim()) {
      error.textContent = "Erro: seu nome não pode estar vazio. Surpreendente, não?";
      return;
    }

    if (!emailValido) {
      error.textContent = "Erro: e-mail inválido. Ele precisa ter @. Talvez.";
      return;
    }

    if (!senhaValida) {
      error.textContent = "Erro: a senha precisa ter exatamente 8 caracteres. Nem 7, nem 9.";
      return;
    }

    if (!cor.value) {
      error.textContent = "Erro: selecione sua cor favorita. O sistema realmente precisa saber disso.";
      return;
    }

    if (!termos.checked) {
      error.textContent = "Erro: você precisa concordar com os termos que não foram exibidos.";
      return;
    }

    error.style.color = "#006400";
    error.textContent = "Sucesso! Ou não... levando você para a tela final.";
    setTimeout(() => {
      window.location.href = "final.html";
    }, 800);
  });

  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", () => {
    alert("Você clicou em FINALIZAR. Era para voltar? Boa sorte.");
  });

  // Uma pequena pegadinha: depois de digitar 3 caracteres, o campo de nome ganha foco novamente.
  nome.addEventListener("input", () => {
    if (nome.value.length === 3) {
      nome.blur();
    }
  });
}
