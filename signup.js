
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('signupForm');
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            const successMessage = document.getElementById('successMessage');
            const togglePassword = document.getElementById('togglePassword');
            const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
            
            // Toggle password visibility
            togglePassword.addEventListener('click', function() {
                if (password.type === 'password') {
                    password.type = 'text';
                    togglePassword.textContent = 'Hide';
                } else {
                    password.type = 'password';
                    togglePassword.textContent = 'Show';
                }
            });
            
            toggleConfirmPassword.addEventListener('click', function() {
                if (confirmPassword.type === 'password') {
                    confirmPassword.type = 'text';
                    toggleConfirmPassword.textContent = 'Hide';
                } else {
                    confirmPassword.type = 'password';
                    toggleConfirmPassword.textContent = 'Show';
                }
            });
            
            // Form validation
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Reset error messages
                nameError.style.display = 'none';
                emailError.style.display = 'none';
                passwordError.style.display = 'none';
                confirmPasswordError.style.display = 'none';
                
                // Validate name
                if (fullName.value.trim() === '') {
                    nameError.style.display = 'block';
                    isValid = false;
                }
                
                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    emailError.style.display = 'block';
                    isValid = false;
                }
                
                // Validate password
                if (password.value.length < 8) {
                    passwordError.style.display = 'block';
                    isValid = false;
                }
                
                // Validate password confirmation
                if (password.value !== confirmPassword.value) {
                    confirmPasswordError.style.display = 'block';
                    isValid = false;
                }
                
                // If form is valid, show success message
                if (isValid) {
                    form.reset();
                    successMessage.style.display = 'block';
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                }
            });
            
            // Real-time validation
            fullName.addEventListener('input', function() {
                if (fullName.value.trim() !== '') {
                    nameError.style.display = 'none';
                }
            });
            
            email.addEventListener('input', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(email.value.trim())) {
                    emailError.style.display = 'none';
                }
            });
            
            password.addEventListener('input', function() {
                if (password.value.length >= 8) {
                    passwordError.style.display = 'none';
                }
                
                if (password.value === confirmPassword.value && confirmPassword.value !== '') {
                    confirmPasswordError.style.display = 'none';
                }
            });
            
            confirmPassword.addEventListener('input', function() {
                if (password.value === confirmPassword.value) {
                    confirmPasswordError.style.display = 'none';
                }
            });
        });
