onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.querySelector('.mensagem-aniversario').style.display = 'block';
    clearTimeout(c);
  }, 1000);
};
