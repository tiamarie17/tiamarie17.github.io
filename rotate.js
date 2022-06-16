const current_rotation = 0;
  document.querySelector(".rotate").addEventListener('click', function(){
	current_rotation += 75;
  document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
});
