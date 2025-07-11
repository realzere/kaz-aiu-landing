const backToTopBtn = document.createElement('button');
        backToTopBtn.textContent = '↑';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 15px;
            background: #2e7d32;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: none;
            z-index: 1000;
            font-size: 18px;
        `;
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });