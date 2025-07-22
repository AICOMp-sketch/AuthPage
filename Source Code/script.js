function flipForm() {
            const inner = document.querySelector('.auth-inner');
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
        }

        // Form validation
        const forms = document.querySelectorAll('input');
        forms.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('border-indigo-500');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('border-indigo-500');
                
                if(!input.value && input.hasAttribute('required')) {
                    input.parentElement.classList.add('border-red-500');
                    setTimeout(() => {
                        input.parentElement.classList.remove('border-red-500');
                    }, 2000);
                }
            });
        });
