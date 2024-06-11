document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.maintenance-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const userForm = document.getElementById('user-form');
    const userInput = document.getElementById('user-input');
    const commonFields = document.getElementById('common-fields');
    const adminFields = document.querySelector('.admin-fields');
    const developerFields = document.querySelector('.developer-fields');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    let selectedOption = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        selectedOption = button.getAttribute('data-option');
        modal.style.display = 'flex';
        resetForm();
        
        switch (selectedOption) {
          case 'track-order':
            userInput.placeholder = 'Enter Tracking ID';
            commonFields.style.display = 'block';
            break;
          case 'order-history':
            userInput.placeholder = 'Enter Order ID';
            commonFields.style.display = 'block';
            break;
          case 'support':
            userInput.placeholder = 'Enter your call back number or call 8107327822';
            commonFields.style.display = 'block';
            break;
          case 'admin-panel':
            adminFields.style.display = 'block';
            break;
          case 'developer-area':
            developerFields.style.display = 'block';
            break;
          case 'business-query':
            alert('Please mail us at business@trendytribes.in');
            modal.style.display = 'none';
            break;
        }
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    userForm.addEventListener('submit', (event) => {
      event.preventDefault();
      validateForm();
    });
  
    function resetForm() {
      commonFields.style.display = 'none';
      adminFields.style.display = 'none';
      developerFields.style.display = 'none';
      userInput.value = '';
      document.getElementById('user-id').value = '';
      document.getElementById('admin-password').value = '';
      document.getElementById('developer-id').value = '';
      document.getElementById('company-mail').value = '';
      document.getElementById('dev-password').value = '';
    }
  
    function validateForm() {
      const userInputValue = userInput.value.trim();
      const userId = document.getElementById('user-id').value.trim();
      const adminPassword = document.getElementById('admin-password').value.trim();
      const developerId = document.getElementById('developer-id').value.trim();
      const companyMail = document.getElementById('company-mail').value.trim();
      const devPassword = document.getElementById('dev-password').value.trim();
  
      const validAdminLogins = [
        { email: 'vansh@trendytribes.in', password: 'tribe@log_in' },
        { email: 'developer@trendytribes.in', password: 'tribe@log_in' },
        { email: 'admin1@trendytribes.in', password: 'tribe@log_in' },
        { email: 'admin2@trendytribes.in', password: 'tribe@log_in' },
        { email: 'admin3@trendytribes.in', password: 'tribe@log_in' }
      ];
  
      const validDeveloperLogins = [
        { email: 'vikas@trendytribes.in', password: 'dev@log_in' },
        { email: 'developer@trendytribes.in', password: 'dev@log_in' },
        { email: 'dev1@trendytribes.in', password: 'dev@log_in' },
        { email: 'dev2@trendytribes.in', password: 'dev@log_in' },
        { email: 'dev3@trendytribes.in', password: 'dev@log_in' }
      ];
  
      switch (selectedOption) {
        case 'track-order':
        case 'order-history':
          if (userInputValue === '9462060099') {
            showSuccessMessage('Success! Details submitted.');
          } else {
            showErrorMessage('The details you are searching for do not exist.');
          }
          break;
        case 'admin-panel':
          const adminLogin = validAdminLogins.find(login => login.email === userId && login.password === adminPassword);
          if (adminLogin) {
            showErrorMessage('Sorry, we can\'t provide access to you as we observe that you are not in office or may not be connected to a secure network.');
          } else {
            showErrorMessage('Invalid details. User does not exist.');
          }
          break;
        case 'developer-area':
          const developerLogin = validDeveloperLogins.find(login => login.email === developerId && login.password === devPassword);
          if (developerLogin) {
            showErrorMessage('Sorry, we can\'t provide access to you as we observe that you are not in office or may not be connected to a secure network.');
          } else {
            showErrorMessage('Invalid details. User does not exist.');
          }
          break;
        case 'support':
          showSuccessMessage('Thank you! We will contact you shortly.');
          break;
      }
    }
  
    function showSuccessMessage(message) {
      successMessage.innerText = message;
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
      modal.style.display = 'none';
    }
  
    function showErrorMessage(message) {
      errorMessage.innerText = message;
      errorMessage.style.display = 'block';
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 3000);
    }
  });
  