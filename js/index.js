function openForm() {
    const root = document.createElement('div');
    const iframe = document.createElement('iframe');

    iframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd8ABIscPFGaG0hE1QuXLvyNI7AbgypUrTnVFxVDnWOZSyilA/viewform?embedded=true';
    iframe.frameborder = 0;
    iframe.marginheight = 0;
    iframe.marginwidth = 0;

    root.appendChild(iframe);

    root.onclick = () => {
        document.body.removeChild(root);
    }

    root.className = 'formConteiner opening';

    document.body.appendChild(root);

    setTimeout(() => {
        root.classList.remove('opening');
    }, 0)

}
