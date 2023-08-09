// ���÷� ������ ����� ���̵� �迭�� ����� ����մϴ�.
const onlineUsers = ['mommy_pig', 'daddy_fish', 'brother_chicken', 'sister_duck', 'user123456789'];

// �������� �ε�Ǹ� ����Ǵ� �Լ�
document.addEventListener('DOMContentLoaded', () => {
  const onlineUsersList = document.getElementById('online-users');

  // ������ ����� ���̵� �迭�� ������� �������� ����� �����մϴ�.
  onlineUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    onlineUsersList.appendChild(listItem);
  });
});

// �̹��� �����̵带 ���� �ڵ�
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slideshow img');
    let currentSlideIndex = 0;
  
    // �̹��� �����̵� �Լ�
    function showNextSlide() {
      slides.forEach(slide => {
        slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        slide.classList.remove('active');
      });
      slides[currentSlideIndex].classList.add('active');
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    }
  
    // 1�ʸ��� �̹��� �����̵带 ����
    setInterval(showNextSlide, 3000);
  });

  // �Խñ��� �߰��ϴ� ���
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-btn');
  const postContainer = document.getElementById('post-container');

  submitBtn.addEventListener('click', () => {
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    if (postTitle.trim() === '' || postContent.trim() === '') {
      alert('����� ������ ��� �Է����ּ���.');
      return;
    }

    const postElement = createPostElement(postTitle, postContent);
    postContainer.appendChild(postElement);

    // �Է� �� ����
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
  });

  function createPostElement(title, content) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    return postElement;
  }
});

// ... (���� �ڵ�� ����) ...

// �ش� ������ alert�� �����ִ� �Լ�
function showAlert(schedule) {
  alert(schedule);
}